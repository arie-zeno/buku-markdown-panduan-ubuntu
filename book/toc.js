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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Panduan Penggunaan</li><li class="chapter-item expanded "><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> Instalasi Sistem Operasi Ubuntu</a></li><li class="chapter-item expanded "><a href="pengenalan_ubuntu_desktop.html"><strong aria-hidden="true">2.</strong> Pengenalan Antarmuka Desktop Ubuntu</a></li><li class="chapter-item expanded "><a href="chapter_2.html"><strong aria-hidden="true">3.</strong> Proses Instalasi Aplikasi pada Ubuntu</a></li><li class="chapter-item expanded affix "><li class="part-title">Instalasi Aplikasi menggunakan GUI</li><li class="chapter-item expanded "><a href="instalasi_gui_ubuntu_software.html"><strong aria-hidden="true">4.</strong> Instalasi Aplikasi menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_gui_synaptic.html"><strong aria-hidden="true">5.</strong> Instalasi Aplikasi menggunakan GUI dengan Synaptic Package Manager</a></li><li class="chapter-item expanded affix "><li class="part-title">Instalasi Aplikasi menggunakan CLI</li><li class="chapter-item expanded "><a href="instalasi_cli_apt.html"><strong aria-hidden="true">6.</strong> Instalasi Aplikasi menggunakan CLI dengan Advanced Packaging Tool (APT)</a></li><li class="chapter-item expanded "><a href="instalasi_cli_flatpak.html"><strong aria-hidden="true">7.</strong> Instalasi Aplikasi menggunakan CLI dengan Flatpak</a></li><li class="chapter-item expanded "><a href="instalasi_cli_snap.html"><strong aria-hidden="true">8.</strong> Instalasi Aplikasi menggunakan CLI dengan Snap</a></li><li class="chapter-item expanded affix "><li class="part-title">Instalasi Aplikasi menggunakan paket .deb</li><li class="chapter-item expanded "><a href="instalasi_deb_gui_ubuntu_software.html"><strong aria-hidden="true">9.</strong> Instalasi paket .deb menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_deb_gui_gdebi.html"><strong aria-hidden="true">10.</strong> Instalasi paket .deb menggunakan GUI dengan GDebi</a></li><li class="chapter-item expanded "><a href="instalasi_deb_cli.html"><strong aria-hidden="true">11.</strong> Instalasi paket .deb menggunakan CLI</a></li><li class="chapter-item expanded affix "><li class="part-title">Kebutuhan Perangkat Lunak</li><li class="chapter-item expanded "><a href="daftar_mata_kuliah.html"><strong aria-hidden="true">12.</strong> Daftar Perangkat Lunak</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="instalasi_vscode.html"><strong aria-hidden="true">12.1.</strong> Visual Studio Code</a></li><li class="chapter-item expanded "><a href="instalasi_python.html"><strong aria-hidden="true">12.2.</strong> Python</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="instalasi_pip python.html"><strong aria-hidden="true">12.2.1.</strong> Pip Python</a></li></ol></li><li class="chapter-item expanded "><a href="instalasi_idle python.html"><strong aria-hidden="true">12.3.</strong> Idle Python</a></li><li class="chapter-item expanded "><a href="instalasi_java.html"><strong aria-hidden="true">12.4.</strong> Java</a></li><li class="chapter-item expanded "><a href="instalasi_jupyterlab.html"><strong aria-hidden="true">12.5.</strong> JupyterLab</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="instalasi_julia.html"><strong aria-hidden="true">12.5.1.</strong> Julia</a></li><li class="chapter-item expanded "><a href="instalasi_r.html"><strong aria-hidden="true">12.5.2.</strong> R</a></li><li class="chapter-item expanded "><a href="instalasi_golang.html"><strong aria-hidden="true">12.5.3.</strong> Golang</a></li></ol></li><li class="chapter-item expanded "><a href="instalasi_netbeans.html"><strong aria-hidden="true">12.6.</strong> Netbeans</a></li><li class="chapter-item expanded "><a href="instalasi_vb.html"><strong aria-hidden="true">12.7.</strong> VirtualBox</a></li><li class="chapter-item expanded "><a href="instalasi_octave.html"><strong aria-hidden="true">12.8.</strong> GNU Octave</a></li><li class="chapter-item expanded "><a href="instalasi_android.html"><strong aria-hidden="true">12.9.</strong> Android Studio</a></li><li class="chapter-item expanded "><a href="instalasi_prolog.html"><strong aria-hidden="true">12.10.</strong> SWI-Prolog</a></li><li class="chapter-item expanded "><a href="instalasi_wireshark.html"><strong aria-hidden="true">12.11.</strong> Wireshark</a></li><li class="chapter-item expanded "><a href="instalasi_figma.html"><strong aria-hidden="true">12.12.</strong> Figma</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Hasil Uji Coba Perangkat Lunak</li><li class="chapter-item expanded "><a href="daftar_mata_kuliah.html"><strong aria-hidden="true">13.</strong> Instalasi Perangkat Lunak</a></li></ol>';
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
