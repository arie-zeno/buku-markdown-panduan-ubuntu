// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> Instalasi Sistem Operasi Ubuntu</a></li><li class="chapter-item expanded "><a href="pengenalan_ubuntu_desktop.html"><strong aria-hidden="true">2.</strong> Pengenalan Antarmuka Desktop Ubuntu</a></li><li class="chapter-item expanded "><a href="chapter_2.html"><strong aria-hidden="true">3.</strong> Proses Instalasi Aplikasi pada Ubuntu</a></li><li class="chapter-item expanded "><a href="instalasi_gui_ubuntu_software.html"><strong aria-hidden="true">4.</strong> Instalasi Aplikasi menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_gui_synaptic.html"><strong aria-hidden="true">5.</strong> Instalasi Aplikasi menggunakan GUI dengan Synaptic Package Manager</a></li><li class="chapter-item expanded "><a href="instalasi_cli_apt.html"><strong aria-hidden="true">6.</strong> Instalasi Aplikasi menggunakan CLI dengan Advanced Packaging Tool (APT)</a></li><li class="chapter-item expanded "><a href="instalasi_cli_apt.html"><strong aria-hidden="true">7.</strong> Instalasi Aplikasi menggunakan CLI dengan Flatpak</a></li><li class="chapter-item expanded "><a href="instalasi_cli_snap.html"><strong aria-hidden="true">8.</strong> Instalasi Aplikasi menggunakan CLI dengan Snap</a></li><li class="chapter-item expanded "><a href="instalasi_deb_gui_ubuntu_software.html"><strong aria-hidden="true">9.</strong> Instalasi paket .deb menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_deb_gui_gdebi.html"><strong aria-hidden="true">10.</strong> Instalasi paket .deb menggunakan GUI dengan GDebi</a></li><li class="chapter-item expanded "><a href="instalasi_deb_cli.html"><strong aria-hidden="true">11.</strong> Instalasi paket .deb menggunakan CLI</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
