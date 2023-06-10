import Handlebars from 'handlebars';

export default function handlebarsPrecompile() {
  const fileRegexp = /\.hbs$|\.handlebars$/;

  return {
    name: 'vite-plugin-handlebars-precompile',
    transform(src, id) {
      if (!fileRegexp.test(id)) {
        return;
      }

      return `
        import Handlebars from 'handlebars/runtime';
        
        export default Handlebars.template(${Handlebars.precompile(src)});
      `;
    }
  }
}