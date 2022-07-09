function getSvg()


const cardName = "AS"; // Ace of Spades

let svgsCache = {};
const importAll = requireContext => requireContext.keys().forEach(
  key => svgsCache[key] = requireContext(key)
);
importAll(require.context('./assets/svg-cards', true, /\.svg$/));

const buildSVGFilename = cardName => `./${cardName}.svg`;
const aceOfSpades = svgsCache[buildSVGFilename(cardName)];