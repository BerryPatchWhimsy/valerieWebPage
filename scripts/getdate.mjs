export function updateCurrentYear() {
    const currentyear = document.querySelector("#currentyear");
    const today = new Date();
    if (currentyear) {
        currentyear.innerHTML = `<span>${today.getFullYear()} </span>`;
    }
}

export function updateLastModified() {
    const lastModified = document.querySelector("#lastModified");
    if (lastModified) {
        lastModified.innerHTML = `Last modified: ${document.lastModified}`;
    }
  }