const de = require('../de')

module.exports = {
  rules: {
    'no-unused-keys': {
      meta: {
        type: 'problem',

        docs: {
          description: 'disallow unused i18n key',
          category: 'Possible Errors',
          recommended: false,
          url: 'https://github.com/zemirco/enterjs2019'
        },
        // fixable: 'code',
        schema: [] // no options
      },
      create(context) {
        return {
          CallExpression: node => {
            const { callee } = node
            if (callee.type === 'MemberExpression') {
              if (callee.object.name === 'i18n') {
                if (callee.property.name === 'transl') {
                  const { value } = node.arguments[0]
                  if (!de[value]) {
                    context.report({
                      node,
                      message: `"${value}" does not exist in i18n files`
                    })
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
