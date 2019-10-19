import models from "../models";

const { rates } = models;

export const exchangeRate = {
  getAllCurrencies: async (req, res) => {
    try {
      const quotes = await rates.findAll({
        attributes: ["quoteRate"]
      });
      return res.status(200).send({
        status: res.statusCode,
        currencies: quotes
      });
    } catch (error) {
      return res.status(500).send({
        status: res.statusCode,
        error: error.message
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const allRates = await rates.findAll({
        attributes: ["baseRate", "quoteRate", "exchangeRate", "reciprocal"]
      });
      return res.status(200).send({
        status: res.statusCode,
        rate: allRates
      });
    } catch (error) {
      return res.status(500).send({
        status: res.statusCode,
        error: "Server error"
      });
    }
  },

  getExchangeRate: async (req, res) => {
    const { baseRate, quoteRate, amount = 1 } = req.body;
    try {
      const findRate = await rates.findOne({
        where: {
          baseRate,
          quoteRate
        },
        attributes: ["baseRate", "quoteRate", "exchangeRate", "reciprocal"]
      });
      if(!findRate) {
        const baseCurrAgainstDollar = await rates.findOne({
          where: {
            quoteRate: baseRate
          }
        });
        const quoteCurrAgainstDollar = await rates.findOne({
          where: {
            quoteRate
          }
        })
        const crossExchangeRateWithDollarAsBase = baseCurrAgainstDollar.exchangeRate * quoteCurrAgainstDollar.exchangeRate;
        const crossExchangeAnswer = amount * crossExchangeRateWithDollarAsBase;
        if (isNaN(crossExchangeAnswer)) {
          return res.status(202).send({
            status: res.statusCode,
            answer: crossExchangeRateWithDollarAsBase
          });
        }
        return res.status(200).send({
          status: res.statusCode,
          exchangeRate: crossExchangeRateWithDollarAsBase,
          answer: crossExchangeAnswer
        })
      }
      if (findRate.baseRate === "USD") {
        const answer = amount * findRate.exchangeRate;
        if (isNaN(answer)) {
          return res.status(202).send({
            status: res.statusCode,
            answer: findRate.exchangeRate
          });
        }
        return res.status(201).send({
          status: res.statusCode,
          answer,
          exchangeRate: findRate.exchangeRate
        });
      }
    } catch (error) {
      return res.status(500).send({
        status: res.statusCode,
        error: error.message
      });
    }
  }
};
