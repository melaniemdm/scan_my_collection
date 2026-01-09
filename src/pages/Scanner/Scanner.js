import { useEffect, useMemo, useState } from "react";

import { loadCatalogue, findBookByIsbn } from "../../services/catalogue.service";
import "./style.css";
import { startBarcodeScanner } from "../../services/barcodescanner.service";

export default function Scanner() {
  const [catalogue, setCatalogue] = useState([]);
  const [scannedCode, setScannedCode] = useState(null);
  const [foundBook, setFoundBook] = useState(null);
  const [error, setError] = useState(null);
  const [isScanning, setIsScanning] = useState(true);

  // charge le catalogue une fois
  useEffect(() => {
    loadCatalogue()
      .then(setCatalogue)
      .catch((e) => setError(e.message));
  }, []);

  // à chaque scan, on cherche le livre
  useEffect(() => {
    if (!scannedCode || catalogue.length === 0) return;
    const book = findBookByIsbn(catalogue, scannedCode);
    setFoundBook(book);
  }, [scannedCode, catalogue]);

  // démarrage/arrêt du scanner
  useEffect(() => {
    if (!isScanning) return;

    const handler = startBarcodeScanner(
      "reader",
      (code) => {
        setScannedCode(code);
        setIsScanning(false); // stop après 1 scan
      },
      (err) => {
        // erreurs fréquentes pendant la détection, on évite de spammer
        // console.warn(err);
      }
    );

    return () => {
      handler.stop();
    };
  }, [isScanning]);

  const status = useMemo(() => {
    if (error) return { type: "error", text: error };
    if (isScanning) return { type: "info", text: "Caméra en cours… Scanne un code-barres." };
    if (!scannedCode) return { type: "info", text: "Aucun scan." };
    if (!foundBook) return { type: "warn", text: "Livre non trouvé dans le catalogue." };
    return { type: "success", text: "Livre trouvé !" };
  }, [error, isScanning, scannedCode, foundBook]);

  const restart = () => {
    setScannedCode(null);
    setFoundBook(null);
    setError(null);
    setIsScanning(true);
  };

  return (
    <div className="scanner-page">
      <h1 className="scanner-title">Scanner un livre</h1>

      <div className={`scanner-status ${status.type}`}>{status.text}</div>

      {isScanning && <div id="reader" className="scanner-reader" />}

      {!isScanning && scannedCode && (
        <div className="scanner-result">
          <div className="scanner-code">ISBN / EAN : <strong>{scannedCode}</strong></div>

          {foundBook ? (
            <div className="scanner-book">
              {foundBook.url && (
                <img
                  className="scanner-cover"
                  src={foundBook.url}
                  alt={foundBook.title}
                  loading="lazy"
                  onError={(e) => (e.currentTarget.style.display = "none")}
                />
              )}
              <div className="scanner-book-infos">
                <div className="scanner-book-title">{foundBook.title}</div>
                <div className="scanner-book-isbn">ISBN : {foundBook.isbn}</div>
              </div>
            </div>
          ) : (
            <div className="scanner-hint">
              Tu peux l’ajouter au catalogue plus tard (ou enrichir automatiquement via une API).
            </div>
          )}

          <button className="scanner-btn" onClick={restart}>
            Scanner un autre livre
          </button>
        </div>
      )}
    </div>
  );
}
