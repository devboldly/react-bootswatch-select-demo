"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_helmet_1 = require("react-helmet");
/**
 * See documentation: [Bootstrap](https://justinmahar.github.io/react-bootswatch-select/Bootstrap)
 *
 * Quickly add Bootstrap stylesheets to the `<head/>` element of the page.
 *
 * The Bootstrap version defaults to `4.4.1`,
 * CDN defaults to [bootstrapcdn.com](https://www.bootstrapcdn.com/), and filename defaults to
 * `bootstrap.min.css`
 *
 * @param props Provide a `version` and optionally the `cdnLocation` and `filename`.
 *
 * The following template is used for the Bootstrap CSS path: `${cdnLocation}/${version}/css/${filename}`
 */
function Bootstrap(props) {
  // Remove trailing slash
  var cdnLocation = props.cdnLocation
    ? props.cdnLocation.replace(/(.*)[/]+$/, "$1")
    : "";
  // Construct CSS path
  var bootstrapCss =
    cdnLocation + "/" + props.version + "/css/" + props.filename;
  return React.createElement(
    react_helmet_1.Helmet,
    null,
    React.createElement("link", {
      rel: "stylesheet",
      type: "text/css",
      href: bootstrapCss,
    })
  );
}
exports.Bootstrap = Bootstrap;
Bootstrap.defaultProps = {
  version: "4.4.1",
  cdnLocation: "https://stackpath.bootstrapcdn.com/bootstrap/",
  filename: "bootstrap.min.css",
};
