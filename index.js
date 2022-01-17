export default (input) => input.replace(/\s([^\s<]+)\s*$/gim, "\u00A0$1");
