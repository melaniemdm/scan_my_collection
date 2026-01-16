import { Html5QrcodeScanner } from "html5-qrcode";

//Démarre un scanner caméra dans l'élément DOM #elementId
export function startBarcodeScanner(
  elementId,
  onSuccess,
  onError = () => {},
  config = {}
) {
  const scanner = new Html5QrcodeScanner(
    elementId,
    {
      fps: 10,
      qrbox: { width: 280, height: 180 },
      rememberLastUsedCamera: true,
      ...config,
    },
    false
  );

  scanner.render(
    (decodedText) => onSuccess(decodedText),
    (err) => onError(err)
  );

  return {
    stop: async () => {
      // clear() stop la caméra et nettoie le DOM
      try {
        await scanner.clear();
      } catch {
        // évite de casser le composant si déjà stoppé
      }
    },
  };
}