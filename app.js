:root {
  --primary-color: #FBB91A;
  --primary-color-light: #f0c86c;
  --secondary-color: #575757;
  --black-color: #000000
}

*,
*::before,
*::after {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

body {
  background-color: var(--black-color);
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

h2 {
  font-size: 50px;
  color: var(--primary-color);
}

h3 {
  color: var(--primary-color);
  font-size: 25px;
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: 5px;
}

h4 {
  font-size: 22px;
  color: var(--primary-color-light);
}

h5 {
  font-size: 19px;
  color: var(--primary-color-light);
}

.form-container {
  background-color: var(--secondary-color);
  padding: 40px;
  margin: 40px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgb(255, 255, 255);
  width: 100%;
  max-width: 920px;
}

input.invalid {
  border-color: red;
}

input.valid {
  border-color: green;
}

small {
  display: none;
  color: red;
  font-size: 12px;
}

.full-width {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-top: 5px;
  box-sizing: border-box;
}

#copy{
  transform: scale(0.8);
  margin-top: 20px;
}

#specifics button {
  margin-top: 10px;
}

.form-section {
  padding: 20px;
  margin-bottom: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.disclaimer {
  font-size: 14px;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.field-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.field-column {
  width: 45%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  margin-top: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-transform: uppercase;
  box-sizing: border-box;
}

input[readonly] {
  background-color: #f4f4f4;
  cursor: not-allowed;
}

input::placeholder {
  color: #888;
}

.button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  outline: none;
  cursor: pointer;
  font-family: sans-serif;
}

/* Shadow layer */
.button .shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-color);
  border-radius: 8px;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

/* Edge layer */
.button .edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: linear-gradient(to left,
      var(--primary-color) 0%,
      var(--primary-color-light) 8%,
      var(--primary-color-light) 92%,
      var(--primary-color) 100%);
}

/* Front layer */
.button .front {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 28px;
  font-size: 1.25rem;
  color: white;
  background: var(--primary-color);
  border-radius: 8px;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

/* Hover and active states */
.button:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

.button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

.button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

/* Disable text selection */
.button .front span {
  user-select: none;
}

/* Modal Background */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
}

/* Show Modal */
.modal.show {
  opacity: 1;
  visibility: visible;
}

/* Modal Content */
.modal-content {
  width: 80%;
  height: 80%;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

/* Modal Appears */
.modal.show .modal-content {
  transform: translateY(0);
}

.modal h3 {
  border-bottom: 0;
  font-size: 18px;
  margin-top: 40px;
}

.table-container {
  overflow-x: auto;
  width: 100%;
}

table {
  width: auto;
  margin: 20px auto;
  border-collapse: collapse;
  font-size: 100%;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
  text-align: center;
  white-space: nowrap;
}

th {
  background-color: gray;
  color: white;
}

td {
  background-color: white;
}

.hidden {
  display: none;
}

.fixed-box {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 200px;
  padding: 15px;
  background-color: #333;
  color: #fff;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgb(255, 255, 255);
  text-align: center;
  font-size: 14px;
  overflow: hidden;
  text-transform: uppercase;
}

.label {
  color: var(--primary-color);
  font-weight: bold;
}
