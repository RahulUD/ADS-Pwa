export const debounce = (func) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      func.apply(context, args)
    }, 500)
  }
}

export const prePareKeyValue = (key, initialDatum, { fields, separators = ['',''] }) => {
  let list = []
  if (initialDatum) {
    initialDatum.forEach(data => {
      let value = ''
      fields.forEach(field => {
        value = value + ` ${separators[0]} ${data[field]} ${separators[1]}`
      });
      list.push({
        key: data[key],
        value: value
      })
    });
  }
  return list
}

export const handleValidation = states => {
  let isValid=true
  states.forEach(state => {
    isValid = state.valid && isValid
  });
  return isValid
}