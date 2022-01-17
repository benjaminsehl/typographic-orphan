export default (input) => input.replace(/\s([^\s<]+)\s*$/g, "\u00A0$1");
