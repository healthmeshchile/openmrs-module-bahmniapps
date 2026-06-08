/*
 * This Source Code Form is subject to the terms of the Mozilla Public License,
 * v. 2.0. If a copy of the MPL was not distributed with this file, You can
 * obtain one at https://www.bahmni.org/license/mplv2hd.
 *
 * Copyright (C) OpenMRS Inc. OpenMRS is a registered trademark and the OpenMRS
 * graphic logo is a trademark of OpenMRS Inc.
 */

'use strict';

Bahmni.Common.Util.GenderUtil = {
    translateGender: function (genderMap, $translate) {
        var genderTranslationKeys = {
            M: "GENDER_M",
            F: "GENDER_F",
            O: "GENDER_O",
            MALE: "GENDER_M",
            FEMALE: "GENDER_F",
            OTHER: "GENDER_O"
        };

        _.forEach(genderMap, function (value, key) {
            var normalizedKey = key && key.toUpperCase();
            var normalizedValue = value && value.toUpperCase();
            var translationKey = genderTranslationKeys[normalizedKey] || genderTranslationKeys[normalizedValue] || "GENDER_" + normalizedKey;
            var translatedGender = $translate.instant(translationKey);
            if (translatedGender != translationKey) {
                genderMap[key] = translatedGender;
            }
        });
    }
};
