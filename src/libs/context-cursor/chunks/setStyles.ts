const styles = `
:root {
  --main-cursor-clr: rgb(255, 255, 255, 0.2);
  --main-cursor-hover-clr: rgb(255, 255, 255, 0.07);
  --ghost-shadow: 0 7px 15px rgba(255, 255, 255, 0.14);
}

body {
  margin: 0;
  padding: 0;
}

.c-cursor {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  border-radius: 200px;
  background-color: var(--main-cursor-clr);
  transition: background-color 0.2s ease-in-out;
}

.c-cursor_active {
  background-color: var(--main-cursor-hover-clr);
}

.c-cursor-lift_active {
  background-color: rgba(0,0,0,0);
}
`;

const setStyles = () => {
  const styleSheet = document.createElement("style");
  // Modern approach without using deprecated 'type' attribute
  styleSheet.textContent = styles;
  styleSheet.setAttribute('data-cursor-styles', ''); // Optional: add a data attribute for identification
  document.head.appendChild(styleSheet);
};

export default setStyles;
