import data from './data.json'

export const unique_key = [];

export const data_key = (key_value) => data.filter(element => {
    const isDuplicate = unique_key.includes(element[key_value]);
    if (!isDuplicate) {
        unique_key.push(element[key_value]);
      return true;
    }
    return false;
});

export const unique_cashier = [];
export const data_cashier = () => data.filter(element => {
    const isDuplicate = unique_cashier.includes(element.cashier);
    if (!isDuplicate) {
        unique_cashier.push(element.cashier);
      return true;
    }
    return false;
});

export const unique_zone = [];
export const data_zone = () => data.filter(element => {
    const isDuplicate = unique_zone.includes(element.zone);
    if (!isDuplicate) {
      unique_zone.push(element.zone);
      return true;
    }
    return false;
});

export const unique_product = [];
export const data_product = data.filter((element) => {
    element?.products?.filter( e => {
      const isDuplicate = unique_product.includes(e.name);
      if (!isDuplicate) {
          unique_product.push(e.name);
        return true;
      }
      return false;
    })
    return true;
});

