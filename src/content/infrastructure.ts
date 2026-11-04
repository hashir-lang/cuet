import { faculties } from './faculties';
import { programs } from './programs';

/**
 * Totals derived from the faculty data, so the numbers on the website can never
 * disagree with the per-faculty figures. Expected values from the report (v8):
 * 21 laboratories, 78 planned faculty positions, 26 staff positions.
 */
export const totals = {
  faculties: faculties.length,
  programs: programs.length,
  laboratories: faculties.reduce((sum, f) => sum + f.labs.count, 0),
  /**
   * Library total: NOT CONFIRMED. The report (v8) states a total of 6,500 volumes, but its
   * per-faculty rows add up to 7,100 (800 + 800 + 11 × 500). Until the University confirms
   * which is correct, the website shows per-faculty figures only. Set the confirmed total here.
   */
  libraryVolumesConfirmed: null as number | null,
  plannedFacultyPositions: faculties.reduce((sum, f) => sum + f.plannedFacultyPositions, 0),
  plannedStaffPositions: faculties.reduce((sum, f) => sum + f.plannedStaffPositions, 0),
};

/** Kept for the handover check; not displayed. */
export const libraryCheck = {
  reportedTotal: 6500,
  sumOfRows: faculties.reduce((sum, f) => sum + f.libraryVolumes, 0),
};

/** The source document, used in captions wherever planning figures appear. */
export const infrastructureSource = 'University Faculty Infrastructure Report (v8)';

export const planningNote =
  'Figures are planning allocations from the University’s faculty infrastructure report. They describe what is planned, not facilities that are already in operation.';
