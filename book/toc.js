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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="cover.html">Cover</a></li><li class="chapter-item expanded affix "><li class="part-title">Bab 1</li><li class="chapter-item expanded "><a href="chapter_1.html"><strong aria-hidden="true">1.</strong> Instalasi Sistem Operasi Ubuntu</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="persiapan_instalasi.html"><strong aria-hidden="true">1.1.</strong> Persiapan Instalasi</a></li><li class="chapter-item expanded "><a href="langkah_instalasi.html"><strong aria-hidden="true">1.2.</strong> Langkah-Langkah Instalasi</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Bab 2</li><li class="chapter-item expanded "><a href="bab_2.html"><strong aria-hidden="true">2.</strong> Berkenalan dengan Ubuntu</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="top_bar.html"><strong aria-hidden="true">2.1.</strong> Top Bar/Panel Atas</a></li><li class="chapter-item expanded "><a href="dock.html"><strong aria-hidden="true">2.2.</strong> Dock</a></li><li class="chapter-item expanded "><a href="show_app.html"><strong aria-hidden="true">2.3.</strong> Show Applications</a></li><li class="chapter-item expanded "><a href="activities_overview.html"><strong aria-hidden="true">2.4.</strong> Activities Overview</a></li><li class="chapter-item expanded "><a href="touchpad_gesture.html"><strong aria-hidden="true">2.5.</strong> Touchpad Gesture</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Bab 3</li><li class="chapter-item expanded "><a href="bab_3.html"><strong aria-hidden="true">3.</strong> File System dan File Manager</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="filesystem.html"><strong aria-hidden="true">3.1.</strong> Struktur File System di Linux</a></li><li class="chapter-item expanded "><a href="nautilus.html"><strong aria-hidden="true">3.2.</strong> Penggunaan File Manager</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Bab 4</li><li class="chapter-item expanded "><a href="bab_4.html"><strong aria-hidden="true">4.</strong> Metode Instalasi Program Aplikasi</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="instalasi_gui_ubuntu_software.html"><strong aria-hidden="true">4.1.</strong> Instalasi Aplikasi menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_gui_synaptic.html"><strong aria-hidden="true">4.2.</strong> Instalasi Aplikasi menggunakan GUI dengan Synaptic Package Manager</a></li><li class="chapter-item expanded "><a href="instalasi_cli_apt.html"><strong aria-hidden="true">4.3.</strong> Instalasi Aplikasi menggunakan CLI dengan Advanced Packaging Tool (APT)</a></li><li class="chapter-item expanded "><a href="instalasi_cli_flatpak.html"><strong aria-hidden="true">4.4.</strong> Instalasi Aplikasi menggunakan CLI dengan Flatpak</a></li><li class="chapter-item expanded "><a href="instalasi_cli_snap.html"><strong aria-hidden="true">4.5.</strong> Instalasi Aplikasi menggunakan CLI dengan Snap</a></li><li class="chapter-item expanded "><a href="instalasi_deb_gui_ubuntu_software.html"><strong aria-hidden="true">4.6.</strong> Instalasi paket .deb menggunakan GUI dengan Ubuntu Software</a></li><li class="chapter-item expanded "><a href="instalasi_deb_gui_gdebi.html"><strong aria-hidden="true">4.7.</strong> Instalasi paket .deb menggunakan GUI dengan GDebi</a></li><li class="chapter-item expanded "><a href="instalasi_deb_cli.html"><strong aria-hidden="true">4.8.</strong> Instalasi paket .deb menggunakan CLI</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">Bab 5</li><li class="chapter-item expanded "><a href="bab_5.html"><strong aria-hidden="true">5.</strong> Instalasi Program Aplikasi</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="instalasi_python.html"><strong aria-hidden="true">5.1.</strong> Instalasi Python</a></li><li class="chapter-item expanded "><a href="instalasi_idle python.html"><strong aria-hidden="true">5.2.</strong> Instalasi IDLE</a></li><li class="chapter-item expanded "><a href="instalasi_pip python.html"><strong aria-hidden="true">5.3.</strong> Instalasi Pip</a></li><li class="chapter-item expanded "><a href="instalasi_vscode.html"><strong aria-hidden="true">5.4.</strong> Instalasi Visual Studio Code</a></li><li class="chapter-item expanded "><a href="instalasi_octave.html"><strong aria-hidden="true">5.5.</strong> Instalasi GNU Octave</a></li><li class="chapter-item expanded "><a href="instalasi_prolog.html"><strong aria-hidden="true">5.6.</strong> Instalasi SWI-Prolog</a></li><li class="chapter-item expanded "><a href="instalasi_wireshark.html"><strong aria-hidden="true">5.7.</strong> Instalasi Wireshark</a></li><li class="chapter-item expanded "><a href="instalasi_vb.html"><strong aria-hidden="true">5.8.</strong> Instalasi VirtualBox</a></li><li class="chapter-item expanded "><a href="instalasi_android.html"><strong aria-hidden="true">5.9.</strong> Instalasi Android Studio</a></li><li class="chapter-item expanded "><a href="instalasi_winbox.html"><strong aria-hidden="true">5.10.</strong> Instalasi Winbox</a></li><li class="chapter-item expanded "><a href="instalasi_kdenlive.html"><strong aria-hidden="true">5.11.</strong> Instalasi kdenlive</a></li><li class="chapter-item expanded "><a href="instalasi_audacity.html"><strong aria-hidden="true">5.12.</strong> Instalasi audacity</a></li><li class="chapter-item expanded "><a href="instalasi_figma.html"><strong aria-hidden="true">5.13.</strong> Instalasi figma</a></li><li class="chapter-item expanded "><a href="instalasi_geogebra.html"><strong aria-hidden="true">5.14.</strong> Instalasi geogebra</a></li><li class="chapter-item expanded "><a href="instalasi_qgis.html"><strong aria-hidden="true">5.15.</strong> Instalasi qgis</a></li><li class="chapter-item expanded "><a href="instalasi_apache2.html"><strong aria-hidden="true">5.16.</strong> Instalasi apache2</a></li><li class="chapter-item expanded "><a href="instalasi_mysql.html"><strong aria-hidden="true">5.17.</strong> Instalasi mysql</a></li><li class="chapter-item expanded "><a href="instalasi_dbeaver.html"><strong aria-hidden="true">5.18.</strong> Instalasi dbeaver</a></li><li class="chapter-item expanded "><a href="instalasi_java.html"><strong aria-hidden="true">5.19.</strong> Instalasi Java</a></li><li class="chapter-item expanded "><a href="instalasi_php.html"><strong aria-hidden="true">5.20.</strong> Instalasi PHP</a></li><li class="chapter-item expanded "><a href="instalasi_composer.html"><strong aria-hidden="true">5.21.</strong> Instalasi composer</a></li><li class="chapter-item expanded "><a href="instalasi_webgl.html"><strong aria-hidden="true">5.22.</strong> Instalasi webgl</a></li><li class="chapter-item expanded "><a href="instalasi_zotero.html"><strong aria-hidden="true">5.23.</strong> Instalasi zotero</a></li><li class="chapter-item expanded "><a href="instalasi_inkscape.html"><strong aria-hidden="true">5.24.</strong> Instalasi inkscape</a></li><li class="chapter-item expanded "><a href="instalasi_gimp.html"><strong aria-hidden="true">5.25.</strong> Instalasi gimp</a></li><li class="chapter-item expanded "><a href="instalasi_openelearning.html"><strong aria-hidden="true">5.26.</strong> Instalasi openelearning</a></li><li class="chapter-item expanded "><a href="instalasi_gns3.html"><strong aria-hidden="true">5.27.</strong> Instalasi gns3</a></li><li class="chapter-item expanded "><a href="instalasi_chrome.html"><strong aria-hidden="true">5.28.</strong> Instalasi Google Chrome</a></li><li class="chapter-item expanded "><a href="instalasi_darktable.html"><strong aria-hidden="true">5.29.</strong> Instalasi Darktable</a></li><li class="chapter-item expanded "><a href="instalasi_quran.html"><strong aria-hidden="true">5.30.</strong> Instalasi quran</a></li><li class="chapter-item expanded "><a href="instalasi_fet.html"><strong aria-hidden="true">5.31.</strong> Instalasi fet</a></li><li class="chapter-item expanded "><a href="instalasi_logisim.html"><strong aria-hidden="true">5.32.</strong> Instalasi logisim</a></li><li class="chapter-item expanded "><a href="instalasi_sagemath.html"><strong aria-hidden="true">5.33.</strong> Instalasi sagemath</a></li><li class="chapter-item expanded "><a href="instalasi_pspp.html"><strong aria-hidden="true">5.34.</strong> Instalasi pspp</a></li><li class="chapter-item expanded "><a href="instalasi_simphy.html"><strong aria-hidden="true">5.35.</strong> Instalasi simphy</a></li><li class="chapter-item expanded "><a href="instalasi_postman.html"><strong aria-hidden="true">5.36.</strong> Instalasi postman</a></li><li class="chapter-item expanded "><a href="instalasi_jupyterlab.html"><strong aria-hidden="true">5.37.</strong> Instalasi jupyterlab</a></li><li class="chapter-item expanded "><a href="instalasi_projectlibre.html"><strong aria-hidden="true">5.38.</strong> Instalasi ProjectLibre</a></li><li class="chapter-item expanded "><a href="instalasi_libreoffice.html"><strong aria-hidden="true">5.39.</strong> Instalasi LibreOffice</a></li><li class="chapter-item expanded "><a href="instalasi_firefox.html"><strong aria-hidden="true">5.40.</strong> Instalasi Mozilla Firefox</a></li><li class="chapter-item expanded "><a href="instalasi_pdfsam.html"><strong aria-hidden="true">5.41.</strong> Instalasi pdfsam</a></li><li class="chapter-item expanded "><a href="instalasi_totem.html"><strong aria-hidden="true">5.42.</strong> Instalasi Totem</a></li><li class="chapter-item expanded "><a href="instalasi_calibre.html"><strong aria-hidden="true">5.43.</strong> Instalasi calibre</a></li><li class="chapter-item expanded "><a href="instalasi_peazip.html"><strong aria-hidden="true">5.44.</strong> Instalasi peazip</a></li><li class="chapter-item expanded "><a href="instalasi_zoom.html"><strong aria-hidden="true">5.45.</strong> Instalasi zoom</a></li><li class="chapter-item expanded "><a href="instalasi_fdm.html"><strong aria-hidden="true">5.46.</strong> Instalasi fdm</a></li><li class="chapter-item expanded "><a href="instalasi_git.html"><strong aria-hidden="true">5.47.</strong> Instalasi git</a></li></ol></li></ol>';
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
