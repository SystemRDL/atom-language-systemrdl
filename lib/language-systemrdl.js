exports.activate = function () {
  if (!atom.grammars.addInjectionPoint) return

  atom.grammars.addInjectionPoint('source.systemrdl', {
    type: 'preproc_arg',
    language (arg) { return 'systemrdl' },
    content (arg) { return arg }
  })

}
