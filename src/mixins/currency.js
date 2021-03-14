export const currency = {
  methods: {
    addCurrency(price, currency = "$") {
      return (
        currency +
        Number(price)
          .toFixed(1)
          .toLocaleString() +
        " "
      );
    }
  }
};
