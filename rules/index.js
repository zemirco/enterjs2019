module.exports = {
  rules: {
    'no-unused-keys': {
      create() {
        return {
          CallExpression: node => {
            const { callee } = node
            if (callee.type === 'MemberExpression') {
              if (callee.object.name === 'i18n') {
                if (callee.property.name === 'transl') {
                  // console.log(node.arguments[0].value)
                }
              }
            }
            // console.log('---')
          }
        }
      }
    }
  }
}
