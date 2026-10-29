// Fetch a markdown file from a GitHub repo at page load and render it in place,
// so the page always shows the latest version of the document.
//
// Usage: <div class="remote-markdown" data-repo="owner/repo" data-branch="main" data-file="doc.md"></div>
// Requires marked.js (https://github.com/markedjs/marked).

(function () {
  // GitHub-style heading slugs, so in-document links like (#1-wellbeing-and-belonging) work
  function slugify(text, seen) {
    var slug = text.trim().toLowerCase()
      .replace(/[^\p{L}\p{N}\s_-]/gu, '')
      .replace(/\s/g, '-');
    if (seen[slug] !== undefined) {
      seen[slug] += 1;
      return slug + '-' + seen[slug];
    }
    seen[slug] = 0;
    return slug;
  }

  function render(el) {
    var repo = el.dataset.repo;
    var branch = el.dataset.branch || 'main';
    var file = el.dataset.file;
    var rawUrl = 'https://raw.githubusercontent.com/' + repo + '/' + branch + '/' + file;
    var blobBase = 'https://github.com/' + repo + '/blob/' + branch + '/';

    fetch(rawUrl, { cache: 'no-cache' })
      .then(function (response) {
        if (!response.ok) throw new Error(response.status);
        return response.text();
      })
      .then(function (md) {
        el.innerHTML = marked.parse(md);

        // the page title already comes from the layout
        var h1 = el.querySelector('h1');
        if (h1) h1.remove();

        var seen = {};
        el.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(function (h) {
          h.id = slugify(h.textContent, seen);
        });

        el.querySelectorAll('a[href]').forEach(function (a) {
          var href = a.getAttribute('href');
          if (/^([a-z]+:|#|\/)/i.test(href)) {
            if (/^https?:/i.test(href)) a.target = '_blank';
            return;
          }
          // sibling markdown documents are rendered as pages on this site;
          // other relative links point back to the repo
          var m = href.match(/^([\w-]+)\.md(#.*)?$/);
          a.href = m ? '/' + m[1] + (m[2] || '') : blobBase + href;
        });

        if (location.hash) {
          var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
          if (target) target.scrollIntoView();
        }
      })
      .catch(function () {
        el.innerHTML = '<p>Could not load this document. You can read it on <a href="' +
          blobBase + file + '">GitHub</a>.</p>';
      });
  }

  document.querySelectorAll('.remote-markdown').forEach(render);
})();
