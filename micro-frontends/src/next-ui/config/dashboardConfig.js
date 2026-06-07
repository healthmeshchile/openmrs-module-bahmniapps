/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

// ─── Valores de respaldo ──────────────────────────────────────────────────────
// Estos valores se usan SOLO si la API de OpenMRS no devuelve datos de la
// institución (systemsetting clinic.* o sessionLocation).
// En producción la institución se carga dinámicamente en AllOrdersDashboard.
export const dashboardConfig = {
  institution: {
    name: "Establecimiento de Salud",   // fallback genérico
    address: "",
    phone: "",
    email: ""
  },

  // ── Formularios de Bahmni FormBuilder ──────────────────────────────────────
  // Añadir aquí cada formulario que se quiera mostrar como una nueva pestaña.
  //
  // Cómo obtener los UUIDs:
  //   encounterTypeUuid → Admin > Manage Encounter Types (OpenMRS)
  //                       o GET /openmrs/ws/rest/v1/encountertype?q=<nombre>
  //   conceptDisplay    → el nombre exacto del concepto en OpenMRS (campo "display")
  //                       o GET /openmrs/ws/rest/v1/concept?q=<nombre>&v=custom:(display)
  //
  formSections: [
    // Ejemplo: Licencia Medica (estrategia por encounterTypeUuid)
    // {
    //   key:               "sick_leave",
    //   label:             "Licencias Médicas",
    //   filePrefix:        "Licencia",
    //   tagColor:          "cyan",
    //   encounterTypeUuid: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
    //   fields: [
    //     { label: "Fecha",          source: "encounterDate" },
    //     { label: "Diagnóstico",    conceptDisplay: "Diagnóstico" },
    //     { label: "Días de reposo", conceptDisplay: "Días de reposo" },
    //   ],
    // },
  ],

  professional: {
    showName: true,
    showSpecialty: true,
    showRut: true,
    showSignature: true
  },
  visualization: {
    headerColor: "#0f62fe",
    fontFamily: "'IBM Plex Sans', sans-serif"
  },
  endpoints: {
    laboratory: "/openmrs/ws/rest/v1/order?orderType=laboratory",
    medication: "/openmrs/ws/rest/v1/order?orderType=drug",
    imaging: "/openmrs/ws/rest/v1/order?orderType=radiology",
    procedure: "/openmrs/ws/rest/v1/order?orderType=procedure",
    referral: "/openmrs/ws/rest/v1/order?orderType=referral",
    certificates: "/openmrs/ws/rest/v1/obs",
    emailService: "/api/email/send"
  }
};
