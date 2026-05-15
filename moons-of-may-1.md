---
layout: secret-page
title: Moons of May
subtitle: A tiny private photo diary
permalink: /moons-of-may/
show-avatar: false
noindex: true
sitemap: false
---

<style>
  html,
  body {
    background: #1f242b;
  }

  body {
    color: #d9dde3;
  }

  h1,
  h3 {
    color: #eef1f4;
  }

  hr {
    border-color: #4b535e;
  }

  code {
    color: #e5e8ec;
    background: #343b45;
  }

  .moon-phase-icon {
    width: 1.35em;
    height: 1.35em;
    vertical-align: -0.2em;
    margin: 0 0.2em;
  }

  .diary-photo-link {
    display: inline-block;
    margin-top: 3em;
  }

  .diary-photo-link {
    display: inline-block;
    margin-top: 1em;
  }

  .diary-photo-link img {
    cursor: zoom-in;
  }

  .diary-phrase {
    margin-top: 1em;
    margin-bottom: 1.5em;
  }

  .diary-countdown {
    display: block;
    margin-top: 4em;
    font-size: 0.82em;
    color: #aeb6c2;
  }

  #diary-locked {
    color: #d9dde3;
    border-color: #515966;
    background: #2a3038;
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.22);
  }

  #diary-passphrase {
    font-family: "Courier New", Courier, monospace;
    color: #eef1f4;
    border: 1px solid #626b78;
    background: #1b2027;
  }

  .diary-note {
    font-size: 0.95em;
    color: #aeb6c2;
  }

  .diary-disclaimer {
    margin: 20em 0 0 0;
    padding-top: 1rem;
    border-top: 1px solid #3f4650;
    font-size: 0.78em;
    color: #8b949f;
  }

  .secret-pop {
    position: relative;
    border-bottom: 1px dotted #8b949f;
    cursor: pointer;
  }

  .secret-pop-text {
    display: none;
    position: absolute;
    left: 50%;
    bottom: 1.7em;
    transform: translateX(-50%);
    min-width: 5rem;
    padding: 0.35rem 0.55rem;
    border-radius: 6px;
    color: #eef1f4;
    background: #343b45;
    font-size: 1em;
    text-align: center;
    white-space: nowrap;
    z-index: 10;
  }

  .secret-pop:hover .secret-pop-text,
  .secret-pop:focus .secret-pop-text,
  .secret-pop:active .secret-pop-text {
    display: block;
  }

  .heart-beat {
    display: inline-block;
    position: relative;
    animation: heart-beat-pulse 0.82s ease-in-out infinite;
  }

  @keyframes heart-beat-pulse {
    0%,
    100% {
      transform: scale(1);
    }

    18% {
      transform: scale(1.18);
    }

    36% {
      transform: scale(1);
    }

    54% {
      transform: scale(1.1);
    }

    72% {
      transform: scale(1);
    }
  }

  @keyframes heart-beat-alt {
    0%,
    49% {
      opacity: 0;
    }

    50%,
    100% {
      opacity: 1;
    }
  }
</style>

<div id="diary-locked" style="max-width: 680px; margin: 0 auto 2rem auto; padding: 1.25rem; border-radius: 8px;">
  <h1 style="text-align: center; margin: 0 0 1.25rem 0;">Secret webpage 🫆</h1>
  <p>Enter the phrase to unlock.</p>
  <input id="diary-passphrase" type="password" placeholder="Enter passphrase" autocomplete="off" style="width: 100%; margin: 0.5rem 0; padding: 0.6rem;" />
  <label style="display: block; margin: 0 0 0.75rem 0; font-weight: normal;">
    <input id="diary-toggle-passphrase" type="checkbox" />
    Show passphrase
  </label>
  <button id="diary-show-hint" class="btn btn-default btn-sm" type="button">Show hint</button>
  <p id="diary-hint" style="display: none; margin: 0.75rem 0 0 0; color: #aeb6c2;">
    Hint: A tides lecture took place and also a stolen vegetable
  </p>
  <button id="diary-unlock" class="btn btn-primary">Unlock</button>
  <p id="diary-msg" style="margin-top: 0.75rem; color: #b30000; min-height: 1.2rem;"></p>
</div>

<div id="diary-content" style="display: none;">
  <h1 style="text-align: center; margin: 1em 0 0.35rem 0;">Moons of May</h1>
  <p style="text-align: right; margin: 1em 0 1.25rem 0; font-size: 0.9em; font-style: italic; color: #aeb6c2;">for Gemma mou</p>

  <p style="max-width: 680px; margin: 5em auto 5em auto; text-align: center; font-size: 0.98em; color: #c8ced6;">
    Each day, precisely at <em>midnight</em> (Melbourne time), a photo and short (or long?) phrase will appear, giving you a small moonlit glimpse of things I notice, moments that linger — thinking of you, thinking of us. <br/>
    <br/>
    ✨&nbsp;&nbsp;🦒&nbsp;&nbsp;<span class="heart-beat">❤️</span>&nbsp;&nbsp;🦦&nbsp;&nbsp;🔥
    <br/>
    <span id="diary-countdown" class="diary-countdown">Calculating the next moonlit arrival...</span>
  </p>

  <!-- <p class="diary-note">
    Moon icons are local files in <code>/img/moon-phases/</code>, so you can tweak size/style anytime.
  </p>
  <p class="diary-note">
    Add daily photos to <code>/img/photo-diary/</code> with names like <code>photo-may12.jpg</code>, then uncomment that day's image line.
  </p> -->

  <hr />

  <h3>11 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.320&p=5.081&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waning Crescent</small></h3>
  <img src="/img/photo-diary/photo-may11.jpg" title="I'm not used to taking mirror selfies.." style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>An errand dream-team; at the USD exchange shop 7 months later.</em></p>

  <hr />
  <h3>12 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.225&p=5.294&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waning Crescent</small></h3>
  <img src="/img/photo-diary/photo-may12.jpg" title="Walking to the tram while holding a motorcycle helmet.." style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Stark contrast; brisk and rust.</em></p>

  <hr />
  <h3>13 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.143&p=5.507&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waning Crescent</small></h3>
  <img src="/img/photo-diary/photo-may13.jpg" title="Came home and found them sleeping like this holding hands... ehm... wheels.." style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Love is (amongst other things) to hold hands while asleep. 💤</em></p>

  <hr />
  <h3>14 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.077&p=5.720&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>New Moon</small></h3>
  <img src="/img/photo-diary/photo-may14.jpg" title="Different liquids; all somehow intimately related to you" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>A panacea.</em></p>

  <hr />
  <h3>15 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.030&p=5.932&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>New Moon</small></h3>
  <img src="/img/photo-diary/photo-may15.jpg" title="few metres behind is our hotel that we spend a Friday date ❤️‍🔥" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Every corner of Melbourne feels of you.</em></p>

  <hr />
  <h3>16 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.005&p=6.145&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>New Moon</small></h3>
  <img src="/img/photo-diary/photo-may16.jpg" title="Photo for 16 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>17 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.001&p=0.075&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>New Moon</small></h3>
  <img src="/img/photo-diary/photo-may17.jpg" title="Photo for 17 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>18 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.021&p=0.288&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Crescent</small></h3>
  <img src="/img/photo-diary/photo-may18.jpg" title="Photo for 18 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>19 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.061&p=0.500&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Crescent</small></h3>
  <img src="/img/photo-diary/photo-may19.jpg" title="Photo for 19 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>20 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.122&p=0.713&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Crescent</small></h3>
  <img src="/img/photo-diary/photo-may20.jpg" title="Photo for 20 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>21 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.199&p=0.926&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>First Quarter</small></h3>
  <img src="/img/photo-diary/photo-may21.jpg" title="Photo for 21 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>22 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.291&p=1.139&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>First Quarter</small></h3>
  <img src="/img/photo-diary/photo-may22.jpg" title="Photo for 22 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>23 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.391&p=1.351&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>First Quarter</small></h3>
  <img src="/img/photo-diary/photo-may23.jpg" title="Photo for 23 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>24 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.497&p=1.564&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>First Quarter</small></h3>
  <img src="/img/photo-diary/photo-may24.jpg" title="Photo for 24 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>25 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.602&p=1.777&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Gibbous</small></h3>
  <img src="/img/photo-diary/photo-may25.jpg" title="Photo for 25 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>26 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.703&p=1.990&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Gibbous</small></h3>
  <img src="/img/photo-diary/photo-may26.jpg" title="Photo for 26 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>27 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.795&p=2.203&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Gibbous</small></h3>
  <img src="/img/photo-diary/photo-may27.jpg" title="Photo for 27 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>28 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.874&p=2.415&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Waxing Gibbous</small></h3>
  <img src="/img/photo-diary/photo-may28.jpg" title="Photo for 28 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <hr />
  <h3>29 May 2026 <img class="moon-phase-icon" src="https://www.timeanddate.com/scripts/moon.php?i=0.936&p=2.628&r=2.404" alt="Moon phase for Melbourne/Dili" title="Moon phase for Melbourne/Dili" /> <small>Full Moon</small></h3>
  <img src="/img/photo-diary/photo-may29.jpg" title="Photo for 29 May 2026" style="max-width: 100%; height: auto; border-radius: 6px;" />
  <p class="diary-phrase"><em>Write your phrase for today.</em></p>

  <!--
  <hr />
  <h4>How to keep adding days</h4>
  <ol>
    <li>Duplicate one day block.</li>
    <li>Update date, moon icon, moon phase text, and image filename.</li>
    <li>Uncomment the <code>&lt;img&gt;</code> line once that photo exists in <code>/img/photo-diary/</code>.</li>
  </ol>
  -->

  <p class="diary-disclaimer">
    <b>Disclaimers</b> <br/>
    This webpage is not indexed and thus not reachable via search engines. <br/>
    Also, the webpage is guarded by a very official-looking browser-side SHA-256 passphrase hash. <br/>
    <br/>
    <b>Warning</b> <br/>
    If you notice any suspicious behaviour that may hint that the encryption of the webpage is compromised then reach out to the <span class="secret-pop" tabindex="0">webpage administrator<span class="secret-pop-text">Ναβίτ σου</span></span> (who, btw, is in love with Gemma) asap!
  </p>
</div>

<script>
  (function () {
    var HASH_HEX = "101491de43ec762be1eabeb5bfde08501bf616672665a09cacc3f432d83705ba";
    var STORAGE_KEY = "moonlight-diary-unlocked";
    var button = document.getElementById("diary-unlock");
    var hintButton = document.getElementById("diary-show-hint");
    var hint = document.getElementById("diary-hint");
    var input = document.getElementById("diary-passphrase");
    var toggle = document.getElementById("diary-toggle-passphrase");
    var msg = document.getElementById("diary-msg");
    var locked = document.getElementById("diary-locked");
    var content = document.getElementById("diary-content");
    var countdown = document.getElementById("diary-countdown");

    function getAltPhotoCandidates(src) {
      var match = src.match(/^(.*?)(\.[^.\/]+)$/);
      if (!match) {
        return [];
      }

      var base = match[1];
      var ext = match[2];
      var candidates = [base + "-alt" + ext];
      [".jpg", ".jpeg", ".png", ".webp"].forEach(function (candidateExt) {
        var candidate = base + "-alt" + candidateExt;
        if (candidates.indexOf(candidate) === -1) {
          candidates.push(candidate);
        }
      });
      return candidates;
    }

    function useAltPhotoIfAvailable(link, src) {
      var candidates = getAltPhotoCandidates(src);

      function tryCandidate(index) {
        if (index >= candidates.length) {
          return;
        }

        var candidate = candidates[index];
        var testImage = new Image();
        testImage.onload = function () {
          link.href = candidate;
        };
        testImage.onerror = function () {
          tryCandidate(index + 1);
        };
        testImage.src = candidate;
      }

      tryCandidate(0);
    }

    function makeDiaryPhotosClickable() {
      var photos = content.querySelectorAll('img[src^="/img/photo-diary/"]');
      photos.forEach(function (photo) {
        var src = photo.getAttribute("src");
        if (photo.parentNode && photo.parentNode.tagName === "A") {
          useAltPhotoIfAvailable(photo.parentNode, src);
          return;
        }

        var link = document.createElement("a");
        link.className = "diary-photo-link";
        link.href = src;
        link.target = "_blank";
        link.rel = "noopener";
        link.setAttribute("aria-label", "Open photo on its own page");
        useAltPhotoIfAvailable(link, src);

        photo.parentNode.insertBefore(link, photo);
        link.appendChild(photo);
      });
    }

    function releaseTimeForMelbourneMay2026(day) {
      return Date.UTC(2026, 4, day, 13, 59, 59);
    }

    function getDiaryDayBlocks() {
      var children = Array.from(content.children);
      var blocks = [];
      for (var i = 0; i < children.length; i++) {
        if (children[i].tagName !== "HR") {
          continue;
        }

        var heading = children[i + 1];
        if (!heading || heading.tagName !== "H3") {
          continue;
        }

        var match = heading.textContent.match(/^(\d{1,2}) May 2026\b/);
        if (!match) {
          continue;
        }

        var nodes = [children[i]];
        var j = i + 1;
        while (
          j < children.length &&
          children[j].tagName !== "HR" &&
          !children[j].classList.contains("diary-disclaimer")
        ) {
          nodes.push(children[j]);
          j++;
        }

        blocks.push({
          day: parseInt(match[1], 10),
          nodes: nodes
        });
        i = j - 1;
      }
      return blocks;
    }

    function applyDiaryReleaseGate() {
      var now = Date.now();
      getDiaryDayBlocks().forEach(function (block) {
        var hidden = now < releaseTimeForMelbourneMay2026(block.day);
        block.nodes.forEach(function (node) {
          node.style.display = hidden ? "none" : "";
        });
      });
    }

    function formatCountdown(milliseconds) {
      var totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
      var days = Math.floor(totalSeconds / 86400);
      var hours = Math.floor((totalSeconds % 86400) / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;
      var parts = [];

      if (days > 0) {
        parts.push(days + "d");
      }
      parts.push(String(hours).padStart(2, "0") + "h");
      parts.push(String(minutes).padStart(2, "0") + "m");
      parts.push(String(seconds).padStart(2, "0") + "s");

      return parts.join(" ");
    }

    function updateDiaryCountdown() {
      if (!countdown) {
        return;
      }

      var now = Date.now();
      var nextBlock = getDiaryDayBlocks()
        .map(function (block) {
          return {
            day: block.day,
            releaseTime: releaseTimeForMelbourneMay2026(block.day)
          };
        })
        .filter(function (block) {
          return now < block.releaseTime;
        })
        .sort(function (a, b) {
          return a.releaseTime - b.releaseTime;
        })[0];

      if (!nextBlock) {
        countdown.textContent = "All available photo entries are visible.";
        return;
      }

      countdown.textContent = "Next photo entry in " + formatCountdown(nextBlock.releaseTime - now) + ".";
    }

    function unlock() {
      locked.style.display = "none";
      content.style.display = "block";
      makeDiaryPhotosClickable();
      applyDiaryReleaseGate();
      updateDiaryCountdown();
      setInterval(applyDiaryReleaseGate, 30000);
      setInterval(updateDiaryCountdown, 1000);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }

    if (sessionStorage.getItem(STORAGE_KEY) === "1") {
      unlock();
      return;
    }

    async function sha256Hex(text) {
      var enc = new TextEncoder().encode(text);
      var digest = await crypto.subtle.digest("SHA-256", enc);
      var bytes = Array.from(new Uint8Array(digest));
      return bytes.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
    }

    async function tryUnlock() {
      msg.textContent = "";
      var passphrase = input.value || "";
      var enteredHash = await sha256Hex(passphrase.trim().toLowerCase());
      if (enteredHash === HASH_HEX) {
        unlock();
      } else {
        msg.textContent = "Nope. Try again.";
      }
    }

    button.addEventListener("click", tryUnlock);
    hintButton.addEventListener("click", function () {
      var hidden = hint.style.display === "none";
      hint.style.display = hidden ? "block" : "none";
      hintButton.textContent = hidden ? "Hide hint" : "Show hint";
    });
    toggle.addEventListener("change", function () {
      input.type = toggle.checked ? "text" : "password";
    });
    input.addEventListener("keydown", function (evt) {
      if (evt.key === "Enter") {
        tryUnlock();
      }
    });
  })();
</script>
