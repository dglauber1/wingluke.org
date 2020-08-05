const remoteURL = "https://wingluke-preview.herokuapp.com";
const localURL = "http://localhost:8000";
const previewURL = window.location.hostname === "localhost" ? localURL : remoteURL;

export default function resolveProductionUrl(document) {
  if (document._type === "project") {
    return `${previewURL}/project/${document.slug.current}`;
  }

  return undefined;
}
