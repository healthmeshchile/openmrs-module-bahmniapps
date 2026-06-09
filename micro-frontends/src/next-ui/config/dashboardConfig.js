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
    {
      key: "patient_instructions",
      label: "Indicaciones para el paciente",
      filePrefix: "Indicaciones",
      tagColor: "cyan",
      observationConceptUuid: "163106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
      fields: [
        { label: "Fecha", source: "encounterDate" },
        { label: "Indicaciones", conceptUuid: "163106AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", conceptDisplay: "nstructions to patient and/or family"" },
      ],
    },
    {
      key: "referral_letter",
      label: "Carta de derivacion",
      filePrefix: "CartaDerivacion",
      tagColor: "warm-gray",
      observationGroupConceptUuid: "9bb0795c-4ff0-0305-1990-000000000047",
      observationConceptUuids: [
        "9bb0795c-4ff0-0305-1990-000000000042",
        "164359AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        "9bb0795c-4ff0-0305-1990-000000000043",
        "9bb0795c-4ff0-0305-1990-000000000044",
      ],
      fields: [
        { label: "Fecha", source: "encounterDate" },
        { label: "Derivado a", conceptUuid: "9bb0795c-4ff0-0305-1990-000000000042", conceptDisplay: "Referred to" },
        { label: "Motivo", conceptUuid: "164359AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", conceptDisplay: "Reason for referral (text)" },
        { label: "Historia relevante", conceptUuid: "9bb0795c-4ff0-0305-1990-000000000043", conceptDisplay: "Relevant clinical history" },
        { label: "Tratamiento realizado", conceptUuid: "9bb0795c-4ff0-0305-1990-000000000044", conceptDisplay: "Treatment provided" },
      ],
    },
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
