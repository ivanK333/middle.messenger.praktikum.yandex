import Handlebars from 'handlebars';

export default function handlebarsPrecompile() {
  const fileRegexp = /\.hbs$|\.handlebars$/;

  return {
    name: 'vite-plugin-handlebars-precompile',
    /**
     The type of any library uses handlebars
     */
    transform(src: any, id: string): string | undefined {
      if (!fileRegexp.test(id)) {
        return undefined;
      }

      return (`
        import Handlebars from 'handlebars/runtime';
        
        export default Handlebars.template(${Handlebars.precompile(src)});
      `);
    },
  };
}
