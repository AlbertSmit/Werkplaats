/**
 * Parse generated CSS and return normal-looking
 * and human readable classnames.
 *
 * It makes the DOM look nicer, 
 * but is definitely not required.
 */
 export const generateScopedName = (
    name: string,
    filename: string,
    css: string
  ) => {
    let [file] = require("path").basename(filename).split(".");
  
    return `${file}-${name}`;
  };

 