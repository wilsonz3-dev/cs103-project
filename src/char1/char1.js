function toggleSection(section) {
    if (section) {
        section.hidden = !section.hidden;
    }
}

// Predictive System Feature
function runAIPrediction() {
    let output = document.getElementById("ai-output");
    let predictions = [
        "Routine scan complete. Proceed with caution, as always.",
        "Lag detected. Recommend low-stimulation environments for optimal performance.",
        "You’ve been motionless for 28 minutes.",
        "Social capacity may be limited. Plan conversations accordingly.",
        "Today’s forecast includes meetings with HR.",
        "System cache is clean. Memory fragments from last Tuesday still unresolved.",
        "Power grid sync achieved. You are now in alignment with something.",
        "The network is silent.",
        "Detected: Overthinking loops."
    ];

    let index = Math.floor(Math.random() * predictions.length);
    let speaker = "<span style='font-weight: bold; color: #e0a243;'>BOB> </span>";
    output.innerHTML = speaker + predictions[index];
}