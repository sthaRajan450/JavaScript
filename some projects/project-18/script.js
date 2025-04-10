
  const voiceSelect = document.querySelector("select");

  let voices = [];

  function populateVoices() {
    voices = window.speechSynthesis.getVoices();

    // Prevent running if voices aren't ready
    if (!voices.length) return;

    voiceSelect.innerHTML = ""; // Clear existing

    voices.forEach((voice) => {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  // Try immediately, then listen for when they're ready
  populateVoices();
  window.speechSynthesis.onvoiceschanged = populateVoices;

  document.querySelector("button").addEventListener("click", () => {
    const text = document.querySelector("textarea").value.trim();
    if (text === "") return;

    const speech = new SpeechSynthesisUtterance(text);
    const selectedVoice = voices.find(v => v.name === voiceSelect.value);

    if (selectedVoice) {
      speech.voice = selectedVoice;
    }

    window.speechSynthesis.speak(speech);
  });

