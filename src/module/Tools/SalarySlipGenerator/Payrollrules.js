// Payroll rules used by the "Auto" option (India). Update this file when the rules change.
// All amounts are in paise (₹1 = 100 paise) so nothing gets rounding errors.

const periodKey = (year, month) => year * 12 + month; // month: 0 = January

/* ---------- Provident Fund (employee share) ----------
   - 12% of PF wages, up to a monthly wage limit (ceiling).
   - PF wages = Basic + DA. Under the labour codes (in force from 21 Nov 2025), if the other
     allowances are more than half of gross pay, the extra is added to PF wages. In practice,
     PF wages are never less than half of gross pay.
   - Ceiling: ₹15,000, raised to ₹25,000 from 17 Sep 2026 (notification S.O. 5109(E)).
     Applied here from the September 2026 pay month. EPFO hasn't said how to split September,
     so untick "Auto" if your accountant splits that month.
   - Rounded to the nearest rupee. */
export const PF_PERCENT = 12;
const PF_CEILING_OLD = 15000;
const PF_CEILING_NEW = 25000;
const PF_NEW_CEILING_FROM = periodKey(2026, 8); // September 2026
const LABOUR_CODES_FROM = periodKey(2025, 10); //  November 2025

export function calculatePf({ basicPaise, daPaise = 0, grossPaise, year, month }) {
  const key = periodKey(year, month);
  const ceiling = key >= PF_NEW_CEILING_FROM ? PF_CEILING_NEW : PF_CEILING_OLD;
  const halfOfGrossRule = key >= LABOUR_CODES_FROM;

  // Worked out at twice the value so "half of gross pay" is always a whole number of paise
  const core2 = 2 * (basicPaise + daPaise);
  const wages2 = halfOfGrossRule ? Math.max(core2, grossPaise) : core2;
  const base2 = Math.min(wages2, 2 * ceiling * 100);

  return {
    pfPaise: Math.round((base2 * PF_PERCENT) / 20000) * 100,
    basePaise: base2 / 2, // the PF wages the 12% was worked out on
    ceiling,
    halfOfGrossRule,
  };
}

/* ---------- ESI (employee share) ----------
0.75% of gross pay, only when gross pay is ₹21,000 or less. Rounded up to the next rupee. */
const ESI_PER_10000 = 75;
const ESI_WAGE_LIMIT = 21000;

export function calculateEsi(grossPaise) {
  const applies = grossPaise > 0 && grossPaise <= ESI_WAGE_LIMIT * 100;
  return {
    esiPaise: applies ? Math.ceil((grossPaise * ESI_PER_10000) / 1000000) * 100 : 0,
    applies,
  };
}