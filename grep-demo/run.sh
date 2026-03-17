#!/usr/bin/env bash
#
# Greppability demo: function declarations vs const arrows
# Run:  bash grep-demo/run.sh
#
set -euo pipefail
cd "$(dirname "$0")"

# ── Ground truth (verify by reading the sample files) ──────
# Both codebases export exactly 21 symbols:
#   6 React components  ─┐
#   3 custom hooks       ├─ 13 functions
#   4 utility functions ─┘
#   5 primitive constants ─┐
#   2 zod schemas          ├─ 8 non-function values
#   1 routes object       ─┘

FUNCTIONS=13
VALUES=8
TOTAL=21

search() { grep -rn "$1" "$2" --include="*.ts" --include="*.tsx"; }
count()  { grep -rc "$1" "$2" --include="*.ts" --include="*.tsx" | awk -F: '{s+=$NF} END{print s+0}'; }

echo ""
echo "  Greppability: function vs const"
echo "  ================================"
echo "  Both codebases export the same $TOTAL symbols:"
echo "    $FUNCTIONS functions (components + hooks + utils)"
echo "    $VALUES values      (constants + schemas + config)"
echo ""
echo "========================================================"
echo ""
echo "  TASK: Find every function definition with one grep"
echo ""
echo "========================================================"

echo ""
echo "  > function-style codebase"
echo "  \$ grep -rn '^export function' function-style/"
echo ""
search '^export function' function-style/
fn_hits=$(count '^export function' function-style/)
fn_pct=$((FUNCTIONS * 100 / fn_hits))
echo ""
echo "    Hits: $fn_hits    Actual functions: $FUNCTIONS    Precision: $fn_pct%"
echo ""

echo "--------------------------------------------------------"
echo ""
echo "  > const-style codebase"
echo "  \$ grep -rn '^export const' const-style/"
echo ""
search '^export const' const-style/
co_hits=$(count '^export const' const-style/)
co_pct=$((FUNCTIONS * 100 / co_hits))
echo ""
echo "    Hits: $co_hits    Actual functions: $FUNCTIONS    Precision: $co_pct%"
echo "    ($VALUES of those hits are constants, schemas, or config -- not functions)"
echo ""

echo "========================================================"
echo ""
echo "  BONUS: Can you also isolate non-function values?"
echo ""
echo "========================================================"
echo ""
val_fn=$(count '^export const' function-style/)
echo "  function-style:  grep '^export const' -> $val_fn hits, $VALUES are values  ->  Precision: 100%"
echo "  const-style:     grep '^export const' -> $co_hits hits, $VALUES are values  ->  Precision: $((VALUES * 100 / co_hits))%"
echo ""

echo "========================================================"
echo ""
echo "  Summary"
echo ""
echo "  +-------------------------+----------------+----------------+"
echo "  | Agent task              | function-style | const-style    |"
echo "  +-------------------------+----------------+----------------+"
printf "  | Find all functions      |  %d/%d = %3d%%  |  %d/%d =  %2d%%  |\n" \
       $FUNCTIONS $fn_hits $fn_pct $FUNCTIONS $co_hits $co_pct
printf "  | Find all values         |  %d/%d  = %3d%%  |  %d/%d =  %2d%%  |\n" \
       $VALUES $val_fn 100 $VALUES $co_hits $((VALUES * 100 / co_hits))
echo "  | Classify w/o parsing    |     yes        |     no         |"
echo "  +-------------------------+----------------+----------------+"
echo ""
echo "  'function' is a free type discriminator."
echo "  When everything is 'const', agents must parse the RHS to classify."
echo ""
