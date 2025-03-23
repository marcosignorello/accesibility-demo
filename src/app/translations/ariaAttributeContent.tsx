import { AriaAttributesContentType } from "../types/AriaAttributestypes";
import { withAriaCheckedWidget } from "../aria-attributes-widgets/aria-checked/with";
import { withoutAriaCheckedWidget } from "../aria-attributes-widgets/aria-checked/without";
import { withLabelledByWidget } from "../aria-attributes-widgets/aria-labelledby/with";
import { withoutLabelledByWidget } from "../aria-attributes-widgets/aria-labelledby/without";
import { withDescribedByWidget } from "../aria-attributes-widgets/aria-describedby/with";
import { withoutDescribedByWidget } from "../aria-attributes-widgets/aria-describedby/without";
import { withLabelWidget } from "../aria-attributes-widgets/aria-label/with";
import { withoutLabelWidget } from "../aria-attributes-widgets/aria-label/without";
import { WithAriaHiddenWidget } from "../aria-attributes-widgets/aria-hidden/with";
import { WithoutAriaHiddenWidget } from "../aria-attributes-widgets/aria-hidden/without";
import { withAriaExpandedWidget } from "../aria-attributes-widgets/aria-expanded/with";
import { withoutAriaExpandedWidget } from "../aria-attributes-widgets/aria-expanded/without";
import { withAriaRquiredWidget } from "../aria-attributes-widgets/aria-required/with";
import { withoutAriaRquiredWidget } from "../aria-attributes-widgets/aria-required/without";
import { withAriaDisabledWidget } from "../aria-attributes-widgets/aria-disabled/with";
import { withoutAriaDisabledWidget } from "../aria-attributes-widgets/aria-disabled/without";
import { withAriaLiveWidget } from "../aria-attributes-widgets/aria-live/with";
import { withoutAriaLiveWidget } from "../aria-attributes-widgets/aria-live/without";
import { WithAriaInvalidWidget } from "../aria-attributes-widgets/aria-invalid/with";
import { WithoutAriaInvalidWidget } from "../aria-attributes-widgets/aria-invalid/without";

export const ariaAttributesContent: AriaAttributesContentType = {
  en: [
    {
      name: "aria-label",
      description:
        "Defines a string value that labels an interactive element. Use it when a text label is not visible on screen.",
      usedFor:
        "Adding accessible labels to elements that have no visible text label, such as icon buttons, form controls, or interactive elements.",
      importance:
        "Critical for screen reader users to understand the purpose of elements that lack visible text labels. Improves navigation and interaction for users who cannot see visual cues.",
      example: {
        withAttribute: {
          ...withLabelWidget,
        },
        withoutAttribute: {
          ...withoutLabelWidget,
        },
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
        withAttribute: {
          ...withLabelledByWidget,
        },
        withoutAttribute: {
          ...withoutLabelledByWidget,
        },
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
        withAttribute: {
          ...withDescribedByWidget,
        },
        withoutAttribute: {
          ...withoutDescribedByWidget,
        },
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
        withAttribute: {
          ...WithAriaHiddenWidget,
        },
        withoutAttribute: {
          ...WithoutAriaHiddenWidget,
        },
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
        withAttribute: {
          ...withAriaExpandedWidget,
        },
        withoutAttribute: {
          ...withoutAriaExpandedWidget,
        },
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
        withAttribute: {
          ...withAriaRquiredWidget,
        },
        withoutAttribute: {
          ...withoutAriaRquiredWidget,
        },
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
        withAttribute: {
          ...withAriaDisabledWidget,
        },
        withoutAttribute: {
          ...withoutAriaDisabledWidget,
        },
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
        withAttribute: {
          ...withAriaLiveWidget,
        },
        withoutAttribute: {
          ...withoutAriaLiveWidget,
        },
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
        withAttribute: {
          ...withAriaCheckedWidget,
        },
        withoutAttribute: {
          ...withoutAriaCheckedWidget,
        },
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
        withAttribute: {
          ...WithAriaInvalidWidget,
        },
        withoutAttribute: {
          ...WithoutAriaInvalidWidget,
        },
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
        withAttribute: {
          ...withLabelWidget,
        },
        withoutAttribute: {
          ...withoutLabelWidget,
        },
      },
    },
    {
      name: "aria-labelledby",
      description:
        "Identifica el/los elemento(s) que etiquetan el elemento actual mediante referencia a sus IDs.",
      usedFor:
        "Conectar un elemento con texto visible en otra parte de la página que sirve como su etiqueta.",
      importance:
        "Permite la reutilización de texto visible como etiquetas y mantiene relaciones adecuadas entre los elementos y sus etiquetas.",
      example: {
        withAttribute: {
          ...withLabelledByWidget,
        },
        withoutAttribute: {
          ...withoutLabelledByWidget,
        },
      },
    },
    {
      name: "aria-describedby",
      description:
        "Identifica el/los elemento(s) que describen el elemento actual mediante referencia a sus IDs.",
      usedFor:
        "Conectar elementos con sus descripciones, particularmente útil para campos de formulario con texto de ayuda o mensajes de error.",
      importance:
        "Asegura que los usuarios reciban información contextual importante sobre los elementos, especialmente crucial para validación de formularios e interacciones complejas.",
      example: {
        withAttribute: {
          ...withDescribedByWidget,
        },
        withoutAttribute: {
          ...withoutDescribedByWidget,
        },
      },
    },
    {
      name: "aria-hidden",
      description:
        "Indica si un elemento está expuesto a una API de accesibilidad.",
      usedFor:
        "Ocultar elementos decorativos o contenido redundante de los lectores de pantalla manteniéndolos visualmente visibles.",
      importance:
        "Ayuda a reducir el ruido y mejorar la experiencia para los usuarios de lectores de pantalla ocultando contenido no esencial.",
      example: {
        withAttribute: {
          ...WithAriaHiddenWidget,
        },
        withoutAttribute: {
          ...WithoutAriaHiddenWidget,
        },
      },
    },
    {
      name: "aria-expanded",
      description:
        "Indica si un control que puede expandirse/contraerse está actualmente expandido o contraído.",
      usedFor:
        "Indicar el estado de widgets expandibles como acordeones, menús y triángulos de apertura.",
      importance:
        "Ayuda a los usuarios a entender el estado actual de los elementos interactivos y qué sucederá cuando interactúen con ellos.",
      example: {
        withAttribute: {
          ...withAriaExpandedWidget,
        },
        withoutAttribute: {
          ...withoutAriaExpandedWidget,
        },
      },
    },
    {
      name: "aria-required",
      description:
        "Indica que se requiere la entrada del usuario en un elemento antes de que se pueda enviar un formulario.",
      usedFor:
        "Marcar campos de formulario que deben completarse antes del envío.",
      importance:
        "Asegura que los usuarios sepan qué campos son obligatorios sin depender únicamente de indicadores visuales.",
      example: {
        withAttribute: {
          ...withAriaRquiredWidget,
        },
        withoutAttribute: {
          ...withoutAriaRquiredWidget,
        },
      },
    },
    {
      name: "aria-disabled",
      description:
        "Indica que el elemento es perceptible pero está deshabilitado, por lo que no es editable o de otro modo operable.",
      usedFor:
        "Indicar que un elemento interactivo no está disponible actualmente para la interacción.",
      importance:
        "Ayuda a los usuarios a entender cuándo los elementos no son interactivos, incluso si parecen clicables o editables.",
      example: {
        withAttribute: {
          ...withAriaDisabledWidget,
        },
        withoutAttribute: {
          ...withoutAriaDisabledWidget,
        },
      },
    },
    {
      name: "aria-live",
      description:
        "Indica que un elemento será actualizado y describe los tipos de actualizaciones que los usuarios pueden esperar.",
      usedFor:
        "Anunciar actualizaciones de contenido dinámico a los usuarios de lectores de pantalla.",
      importance:
        "Asegura que los usuarios estén al tanto de cambios importantes en el contenido sin tener que navegar para encontrarlos.",
      example: {
        withAttribute: {
          ...withAriaLiveWidget,
        },
        withoutAttribute: {
          ...withoutAriaLiveWidget,
        },
      },
    },
    {
      name: "aria-checked",
      description:
        "Indica el estado actual marcado de casillas de verificación, botones de radio y otros widgets.",
      usedFor:
        "Indicar el estado de elementos marcables como casillas de verificación e interruptores.",
      importance:
        "Asegura que los usuarios puedan entender el estado actual de los elementos seleccionables, particularmente cuando se utilizan controles personalizados.",
      example: {
        withAttribute: {
          ...withAriaCheckedWidget,
        },
        withoutAttribute: {
          ...withoutAriaCheckedWidget,
        },
      },
    },
    {
      name: "aria-invalid",
      description:
        "Indica que el valor introducido en un campo de entrada no es válido.",
      usedFor:
        "Marcar campos de formulario que contienen datos no válidos o que son requeridos pero están vacíos.",
      importance:
        "Ayuda a los usuarios a identificar y corregir errores de entrada, especialmente crucial para los usuarios de lectores de pantalla.",
      example: {
        withAttribute: {
          ...WithAriaInvalidWidget,
        },
        withoutAttribute: {
          ...WithoutAriaInvalidWidget,
        },
      },
    },
  ],
};
