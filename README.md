**July 2 - Pages and Styles started**

Updated by: Raine Guarin

- Created "working" folder to store drafts and assets before finalizing to proper framework format
- Created the first page (Birth of Macintosh) using HTML
- Created the first CSS stylesheet (Classic Mac OS)

**July 4 - Pages and Styles started**

Updated by: Ashton Ching
- Started on .astro framework implementation
- Updated base css to .astro
- Updated base html to .mdx

**July 5 - Clickable Eras and Content**

Updated by: Mikyla Aguirre
- Created GuiExhibit.jsx, the current layout right now is it swap the contents where the sidebar era buttons is clicked
- Made each sidebar era buttons clickable and brings you to the next era with the titles
- Put in colors into {theme} in era1.mdx for PowerPC Era
- Added content from content outline for classic Mac OS, plus added subheadings for each machine. No images yet but the code for it is commented as placeholder.
- Added era 3 contents, images not added yet too

**July 6 - More edit and content continuation**
Updated by: Raine Guarin
- Minor changes to layout and main page
- Tried implementing logic to change backgrounds to an image depending on the era but it didn't work :(

Updated by: Mikyla Aguirre
- Completed adding the content for the all eras
- Added the era 6 working sidebar button and complete content, still havent added the pictures tho
- changed filename from 'MacGuiExhibit' to 'GuiExhibit'

**July 12 - Working the Website**
Updated by: Mikyla Aguirre
- I changed a filename from 'MacGuiExhibit' to 'GuiExhibit' on our last commit last minute after everyone has tested if the website was working (which it did) before passing for the Case study project #2 Mid-milestone submission deadline, but then I forgot to change the era1.mdx and home.mdx imports which we found was why the website was not accessible

**July 20 - Museum merge compliance fixes**
Updated by: Mikyla Aguirre
- Renamed our custom layout from `ClassicOsLayout.astro` to `S05_Group7_ClassicOsLayout.astro` to follow announcement post about the naming convention for custom layouts, and updated the imports in era1.mdx and home.mdx to match
- Scoped all of our custom layout's CSS and GuiExhibit.jsx class names under an `s05g7-` prefix (was using generic names like `.header`, `.sidebar`, bare `a`, and even `html, body`) so our styles won't bleed into or clash with other groups' pages once everything is merged into the umbrella museum site
- Removed the old "working" folder cause it was leftover draft content from before we migrated to Astro/MDX and its not used anywhere anymore

**July 20 - Pages organization**
Updated by: Mikyla Aguirre
- Previously for the meantime the references was under era 6 so now I put another button that directs to a different page for the references
- Deleted home.mdx because it doesnt really do anything and replaced the era1mdx name into macintosh.mdx so its more general
- turns out the 404 wasn't caused by our page changes — found a leftover .github workflows/static.yml that was racing against our real astro.yml deploy workflow. static.yml just uploads the raw repo with no build step, so whenever it finished after astro.yml it would overwrite the real site with unbuilt source files (no index.html = 404). deleted static.yml so only the real build-and-deploy workflow runs now
