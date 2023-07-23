import { SvgExport, SvgExportErrors } from "../interfaces/svgExports";

/**
 * Filters an array of SvgExport objects based on a given filter string.
 * @param svgComponents - The array of SvgExport objects to filter.
 * @param filter - The filter string to apply to the component names.
 * @returns An array of SvgExport objects with components filtered based on the filter,
 * or an SvgExportErrors object if there are errors.
 */
export function filterSvgComponents(
  svgComponents: SvgExport[],
  filter: string
): SvgExport[] | SvgExportErrors {
  // If the filter string is empty, return the original array without filtering.
  if (filter.trim().length === 0) {
    return svgComponents;
  }

  // If the filter string has less than 3 characters, return an empty array (no matches).
  if (filter.trim().length < 3) {
    return { messageError: "Please enter at least 3 characters to search..." };
  }

  // Map through the SvgExport objects and filter their svgComponents based on the filter string.
  const filteredExport = svgComponents
    .map((svg) => {
      let { file, svgComponents } = svg;
      const filteredSvg = svgComponents.filter((component) =>
        component.name.toLowerCase().includes(filter.toLowerCase().trim())
      );

      if (filteredSvg.length > 0) {
        return { file, svgComponents: filteredSvg };
      }

      return [];
    })
    .flat();

  // If there are matches, return the filtered array, otherwise return an error message.
  return filteredExport.length > 0 ? filteredExport : { messageError: "No icons found" };
}
