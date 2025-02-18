import {
  AriaAttributesContentType,
} from "../types/AriaAttributestypes";

export const ariaAttributesContent: AriaAttributesContentType = {
  'en': [
    {
      name: "aria-label",
      description:
        "Defines a string value that labels an interactive element. Use it when a text label is not visible on screen.",
      usedFor:
        "Adding accessible labels to elements that have no visible text label, such as icon buttons, form controls, or interactive elements.",
      importance:
        "Critical for screen reader users to understand the purpose of elements that lack visible text labels. Improves navigation and interaction for users who cannot see visual cues.",
      example: {
        code: '<button aria-label="Close dialog">\n  <svg>...</svg>\n</button>',
        widget: (
          <button
            aria-label="Close dialog"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ✕
          </button>
        ),
      },
    },
    {
      name: "aria-labelledby",
      description:
        "Identifies the element(s) that labels the current element by referencing their IDs.",
      usedFor:
        "Connecting an element with visible text elsewhere on the page that serves as its label.",
      importance:
        "Enables reuse of visible text as labels and maintains proper relationships between elements and their labels.",
      example: {
        code: '<h2 id="profile-heading">User Profile</h2>\n<section aria-labelledby="profile-heading">\n  <!-- Profile content -->\n</section>',
        widget: (
          <div>
            <h2 id="profile-heading" className="font-bold">
              User Profile
            </h2>
            <section
              aria-labelledby="profile-heading"
              className="p-4 bg-gray-100 rounded"
            >
              Profile content
            </section>
          </div>
        ),
      },
    },
    {
      name: "aria-describedby",
      description:
        "Identifies the element(s) that describes the current element by referencing their IDs.",
      usedFor:
        "Connecting elements with their descriptions, particularly useful for form fields with help text or error messages.",
      importance:
        "Ensures users receive important contextual information about elements, especially crucial for form validation and complex interactions.",
      example: {
        code: '<input type="password" aria-describedby="password-help"/>\n<div id="password-help">Must be at least 8 characters</div>',
        widget: (
          <div className="space-y-2">
            <input
              type="password"
              aria-describedby="password-help"
              className="border p-2 rounded"
            />
            <div id="password-help" className="text-sm text-gray-600">
              Must be at least 8 characters
            </div>
          </div>
        ),
      },
    },
    {
      name: "aria-hidden",
      description:
        "Indicates whether an element is exposed to an accessibility API.",
      usedFor:
        "Hiding decorative elements or redundant content from screen readers while keeping them visually visible.",
      importance:
        "Helps reduce noise and improve the experience for screen reader users by hiding non-essential content.",
      example: {
        code: '<button>\n  Save\n  <span aria-hidden="true">💾</span>\n</button>',
        widget: (
          <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
            Save
            <span aria-hidden="true">💾</span>
          </button>
        ),
      },
    },
    {
      name: "aria-expanded",
      description:
        "Indicates whether a control that can expand/collapse is currently expanded or collapsed.",
      usedFor:
        "Indicating the state of expandable widgets like accordions, menus, and disclosure triangles.",
      importance:
        "Helps users understand the current state of interactive elements and what will happen when they interact with them.",
      example: {
        code: '<button aria-expanded="false">\n  Show details\n</button>',
        widget: (
          <button
            aria-expanded="false"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Show details
          </button>
        ),
      },
    },
    {
      name: "aria-required",
      description:
        "Indicates that user input is required on an element before a form can be submitted.",
      usedFor: "Marking form fields that must be filled out before submission.",
      importance:
        "Ensures users know which fields are mandatory without relying solely on visual indicators.",
      example: {
        code: '<input type="text" aria-required="true" />',
        widget: (
          <input
            type="text"
            aria-required="true"
            className="border p-2 rounded"
          />
        ),
      },
    },
    {
      name: "aria-disabled",
      description:
        "Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.",
      usedFor:
        "Indicating that an interactive element is not currently available for interaction.",
      importance:
        "Helps users understand when elements are not interactive, even if they appear clickable or editable.",
      example: {
        code: '<button aria-disabled="true">\n  Submit form\n</button>',
        widget: (
          <button
            aria-disabled="true"
            className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            Submit form
          </button>
        ),
      },
    },
    {
      name: "aria-live",
      description:
        "Indicates that an element will be updated and describes the types of updates users can expect.",
      usedFor: "Announcing dynamic content updates to screen reader users.",
      importance:
        "Ensures users are aware of important changes to the content without having to navigate to find them.",
      example: {
        code: '<div aria-live="polite">\n  Loading results...\n</div>',
        widget: (
          <div aria-live="polite" className="p-4 bg-blue-100 rounded">
            Loading results...
          </div>
        ),
      },
    },
    {
      name: "aria-checked",
      description:
        "Indicates the current checked state of checkboxes, radio buttons, and other widgets.",
      usedFor:
        "Indicating the state of checkable elements like checkboxes and toggles.",
      importance:
        "Ensures users can understand the current state of selectable elements, particularly when custom controls are used.",
      example: {
        code: '<div role="checkbox" aria-checked="true">\n  Enable notifications\n</div>',
        widget: (
          <div
            role="checkbox"
            aria-checked="true"
            className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded w-fit"
          >
            <span>✓</span>
            Enable notifications
          </div>
        ),
      },
    },
    {
      name: "aria-invalid",
      description:
        "Indicates that the value entered into an input field is not valid.",
      usedFor:
        "Marking form fields that contain invalid data or are required but empty.",
      importance:
        "Helps users identify and correct input errors, especially crucial for screen reader users.",
      example: {
        code: '<input\n  type="email"\n  aria-invalid="true"\n  aria-describedby="error-msg"\n/>\n<div id="error-msg">Please enter a valid email</div>',
        widget: (
          <div className="space-y-2">
            <input
              type="email"
              aria-invalid="true"
              aria-describedby="error-msg"
              className="border-2 border-red-500 p-2 rounded"
            />
            <div id="error-msg" className="text-red-500 text-sm">
              Please enter a valid email
            </div>
          </div>
        ),
      },
    },
  ],
  es: [
    {
      name: "aria-label",
      description:
        "Define un valor de texto que etiqueta un elemento interactivo. Se usa cuando una etiqueta de texto no es visible en la pantalla.",
      usedFor:
        "Agregar etiquetas accesibles a elementos que no tienen una etiqueta de texto visible, como botones de iconos o controles de formulario.",
      importance:
        "Fundamental para que los usuarios de lectores de pantalla comprendan el propósito de los elementos sin etiquetas visibles.",
      example: {
        code: '<button aria-label="Cerrar diálogo">\n  <svg>...</svg>\n</button>',
        widget: (
          <button
            aria-label="Cerrar diálogo"
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            ✕
          </button>
        ),
      },
    },
    {
      name: "aria-labelledby",
      description:
        "Identifica los elementos que etiquetan el elemento actual mediante referencia a sus IDs.",
      usedFor:
        "Conectar un elemento con texto visible en otra parte de la página que sirve como su etiqueta.",
      importance:
        "Permite reutilizar texto visible como etiquetas y mantiene las relaciones adecuadas entre elementos y sus etiquetas.",
      example: {
        code: '<h2 id="perfil-titulo">Perfil de Usuario</h2>\n<section aria-labelledby="perfil-titulo">\n  <!-- Contenido del perfil -->\n</section>',
        widget: (
          <div>
            <h2 id="perfil-titulo" className="font-bold">
              Perfil de Usuario
            </h2>
            <section
              aria-labelledby="perfil-titulo"
              className="p-4 bg-gray-100 rounded"
            >
              Contenido del perfil
            </section>
          </div>
        ),
      },
    },
    {
      name: "aria-describedby",
      description:
        "Identifica los elementos que describen el elemento actual mediante referencia a sus IDs.",
      usedFor:
        "Conectar elementos con sus descripciones, particularmente útil para campos de formulario con texto de ayuda o mensajes de error.",
      importance:
        "Asegura que los usuarios reciban información contextual importante sobre los elementos.",
      example: {
        code: '<input type="password" aria-describedby="ayuda-password"/>\n<div id="ayuda-password">Debe tener al menos 8 caracteres</div>',
        widget: (
          <div className="space-y-2">
            <input
              type="password"
              aria-describedby="ayuda-password"
              className="border p-2 rounded"
            />
            <div id="ayuda-password" className="text-sm text-gray-600">
              Debe tener al menos 8 caracteres
            </div>
          </div>
        ),
      },
    },
    {
      name: "aria-hidden",
      description:
        "Indica si un elemento está expuesto a una API de accesibilidad.",
      usedFor:
        "Ocultar elementos decorativos o contenido redundante de los lectores de pantalla mientras se mantienen visualmente visibles.",
      importance:
        "Ayuda a reducir el ruido y mejorar la experiencia para los usuarios de lectores de pantalla.",
      example: {
        code: '<button>\n  Guardar\n  <span aria-hidden="true">💾</span>\n</button>',
        widget: (
          <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2">
            Guardar
            <span aria-hidden="true">💾</span>
          </button>
        ),
      },
    },
    {
      name: "aria-expanded",
      description:
        "Indica si un control que puede expandirse/contraerse está actualmente expandido o contraído.",
      usedFor:
        "Indicar el estado de widgets expandibles como acordeones, menús y triángulos de revelación.",
      importance:
        "Ayuda a los usuarios a comprender el estado actual de los elementos interactivos.",
      example: {
        code: '<button aria-expanded="false">\n  Mostrar detalles\n</button>',
        widget: (
          <button
            aria-expanded="false"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Mostrar detalles
          </button>
        ),
      },
    },
    {
      name: "aria-required",
      description:
        "Indica que se requiere la entrada del usuario en un elemento antes de enviar un formulario.",
      usedFor:
        "Marcar campos de formulario que deben completarse antes del envío.",
      importance:
        "Asegura que los usuarios sepan qué campos son obligatorios sin depender únicamente de indicadores visuales.",
      example: {
        code: '<input type="text" aria-required="true" />',
        widget: (
          <input
            type="text"
            aria-required="true"
            className="border p-2 rounded"
          />
        ),
      },
    },
    {
      name: "aria-disabled",
      description:
        "Indica que el elemento es perceptible pero está deshabilitado, por lo que no se puede editar ni operar.",
      usedFor:
        "Indicar que un elemento interactivo no está disponible actualmente para la interacción.",
      importance:
        "Ayuda a los usuarios a entender cuándo los elementos no son interactivos.",
      example: {
        code: '<button aria-disabled="true">\n  Enviar formulario\n</button>',
        widget: (
          <button
            aria-disabled="true"
            className="px-4 py-2 bg-gray-400 text-white rounded cursor-not-allowed"
          >
            Enviar formulario
          </button>
        ),
      },
    },
    {
      name: "aria-live",
      description:
        "Indica que un elemento se actualizará y describe los tipos de actualizaciones que los usuarios pueden esperar.",
      usedFor:
        "Anunciar actualizaciones de contenido dinámico a usuarios de lectores de pantalla.",
      importance:
        "Asegura que los usuarios estén al tanto de cambios importantes en el contenido.",
      example: {
        code: '<div aria-live="polite">\n  Cargando resultados...\n</div>',
        widget: (
          <div aria-live="polite" className="p-4 bg-blue-100 rounded">
            Cargando resultados...
          </div>
        ),
      },
    },
    {
      name: "aria-checked",
      description:
        "Indicates the current checked state of checkboxes, radio buttons, and other widgets.",
      usedFor:
        "Indicating the state of checkable elements like checkboxes and toggles.",
      importance:
        "Ensures users can understand the current state of selectable elements, particularly when custom controls are used.",
      example: {
        code: '<div role="checkbox" aria-checked="true">\n  Enable notifications\n</div>',
        widget: (
          <div
            role="checkbox"
            aria-checked="true"
            className="flex items-center gap-2 p-2 bg-blue-500 text-white rounded w-fit"
          >
            <span>✓</span>
            Enable notifications
          </div>
        ),
      },
    },
    {
      name: "aria-invalid",
      description:
        "Indicates that the value entered into an input field is not valid.",
      usedFor:
        "Marking form fields that contain invalid data or are required but empty.",
      importance:
        "Helps users identify and correct input errors, especially crucial for screen reader users.",
      example: {
        code: '<input\n  type="email"\n  aria-invalid="true"\n  aria-describedby="error-msg"\n/>\n<div id="error-msg">Please enter a valid email</div>',
        widget: (
          <div className="space-y-2">
            <input
              type="email"
              aria-invalid="true"
              aria-describedby="error-msg"
              className="border-2 border-red-500 p-2 rounded"
            />
            <div id="error-msg" className="text-red-500 text-sm">
              Please enter a valid email
            </div>
          </div>
        ),
      },
    },
  ],
};
