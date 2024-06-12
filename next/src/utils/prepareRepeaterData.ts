export const prepareRepeaterData = (name: string, data: any) => {
  const nbFields = data?.[name];
  const _data = [];
  for (let i = 0; i < nbFields; i++) {
    const _item: any = {};
    Object.entries(data).forEach(([key, value]) => {
      if (key.includes(`${name}_${i}`))
        _item[key.replace(`${name}_${i}_`, '')] = value;
    });
    _data.push(_item);
  }
  return _data;
};
