const i18n = {
  transl: message => {
    return `translated ${message}`
  }
}

const MyComponent = () => {
  return i18n.transl('hello')
}

MyComponent()
