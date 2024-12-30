import React, { useState } from "react";
import "./Translator.css";

const Translator = () => {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [fromLang, setFromLang] = useState("en");
  const [toLang, setToLang] = useState("es");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [translationResult, setTranslationResult] = useState("");
  const [translationVisible, setTranslationVisible] = useState(false);

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Spanish" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "it", name: "Italian" },
    { code: "pt", name: "Portuguese" },
    { code: "ru", name: "Russian" },
    { code: "ja", name: "Japanese" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
    { code: "ar", name: "Arabic" },
    { code: "hi", name: "Hindi" },
  ];

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text to translate");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const url = new URL("https://api.mymemory.translated.net/get");
      const params = new URLSearchParams({
        q: inputText,
        langpair: `${fromLang}|${toLang}`,
      });
      url.search = params.toString();

      const response = await fetch(url);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      if (data.responseStatus === 200) {
        setTranslatedText(data.responseData.translatedText);
      } else {
        setError(data.responseDetails || "Translation failed. Please try again.");
      }
    } catch (err) {
      console.error("Translation error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }

    setTranslationResult("Translated text here...");
    setTranslationVisible(true); // Show translated text
  };

  const handleSpeak = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };

  const handleSwapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setTranslatedText("");
  };

  const handleClear = () => {
    setInputText("");
    setTranslatedText("");
    setError("");
    setTranslationVisible(false); // Hide translated result on clear
  };

  const handleInputChange = (e) => {
    const text = e.target.value;
    if (text.length <= 500) {
      setInputText(text);
      setError("");
    }
  };

  return (
    <div className="main-container">
      <div className="translator-wrapper">
        <div className="translator-container">
          <h1 className="translator-title">
            <span className="translator-icon">🌎</span>
            Translatify (Language Translator)
          </h1>

          <div className="language-controls">
            <select
              value={fromLang}
              onChange={(e) => setFromLang(e.target.value)}
              className="language-select"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>

            <button onClick={handleSwapLanguages} className="swap-btn">
              ⇄
            </button>

            <select
              value={toLang}
              onChange={(e) => setToLang(e.target.value)}
              className="language-select"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <div className="translation-area">
            <div className="input-container">
              <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter text to translate..."
                className="text-input"
                maxLength={500}
              />
              <button
                className="listen-btn"
                onClick={() => handleSpeak(inputText, fromLang)}
                disabled={!inputText.trim()}
              >
                🔊 Listen
              </button>
              <span className="char-count">{inputText.length}/500</span>
            </div>

            <div className="button-group">
              <button
                onClick={handleTranslate}
                disabled={isLoading || !inputText.trim()}
                className="translate-btn"
              >
                {isLoading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  "Translate"
                )}
              </button>
              <button onClick={handleClear} className="clear-btn">
                Clear
              </button>
            </div>

            {error && <div className="error-message">{error}</div>}

            {/* Apply visibility class to translation result */}
            {translatedText && (
              <div className={`translation-result ${translationVisible ? 'visible' : ''}`}>
                <h3>Translation:</h3>
                <p>{translatedText}</p>
                <button
                  className="listen-btn"
                  onClick={() => handleSpeak(translatedText, toLang)}
                >
                  🔊 Listen
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;