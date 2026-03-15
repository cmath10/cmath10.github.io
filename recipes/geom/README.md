# Geometry Recipes

This directory holds reusable geometry probe scenarios for `make geom`.

The goal is to avoid rebuilding long selector and relation strings by hand in future sessions.

Related artifact layout:

- screenshots: `artifacts/playwright/shots/`
- geometry reports and overlays: `artifacts/playwright/geom/`
- disposable Playwright run outputs: `artifacts/playwright/runs/`

## Usage

```bash
make geom PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env
```

You can still override any variable from the command line:

```bash
make geom \
  PLAYWRIGHT_GEOM_SCENARIO_FILE=recipes/geom/timeline.env \
  PLAYWRIGHT_GEOM_THEME=dark
```

## Scenario file format

Scenario files use simple shell variable assignments:

- `PLAYWRIGHT_GEOM_URL`
- `PLAYWRIGHT_GEOM_FILE`
- `PLAYWRIGHT_GEOM_OVERLAY_FILE`
- `PLAYWRIGHT_GEOM_SELECTORS`
- `PLAYWRIGHT_GEOM_RELATIONS`

`PLAYWRIGHT_GEOM_RELATIONS` uses this shape:

```text
name|fromSelector|fromAnchor|toSelector|toAnchor|offset
```

Supported anchors:

- `top`
- `bottom`
- `left`
- `right`
- `center-x`
- `center-y`

`offset` is applied to the target selector index. For example, `1` means "compare to the next matched node".

Multiple relations can be joined with `;`.

## Current scenarios

- `timeline.env`
  Purpose: validate timeline marker alignment, continuity of the rail, and spacing between chips and the next item.
