import { SvgExport, SvgExportErrors } from "../interfaces/svgExports";
import { getTranslations } from "./getLocaleLanguage";

/**
 * Filters an array of SvgExport objects based on a given filter string.
 * @param {SvgExport[]} svgComponents - The array of SvgExport objects to filter.
 * @param {string} filter - The filter string to apply to the component names.
 * @returns {SvgExport[] | SvgExportErrors} An array of SvgExport objects with components filtered based on the filter,
 * or an SvgExportErrors object if there are errors.
 */
export function filterSvgComponents(
  svgComponents: SvgExport[],
  filter: string
): SvgExport[] | SvgExportErrors {
  const filterString = filter.toLowerCase().trim();
  const i18n = getTranslations();

  // If the filter string is empty, return the original array without filtering.
  if (filterString.length === 0) {
    return svgComponents;
  }

  // If the filter string has less than 3 characters, return an empty array (no matches).
  if (filterString.length < 3) {
    return { messageError: i18n.PleaseSearch };
  }

  // Filter and flatten the array in a single step using flatMap.
  const filteredExport = svgComponents.flatMap((svg) => {
    const filteredSvgComponents = svg.svgComponents.filter((component) =>
      component.name.toLowerCase().includes(filterString)
    );

    return filteredSvgComponents.length > 0
      ? [{ file: svg.file, svgComponents: filteredSvgComponents }]
      : [];
  });

  // If there are matches, return the filtered array, otherwise return an error message.
  return filteredExport.length > 0 ? filteredExport : { messageError: i18n.NoIconsFound };
}
