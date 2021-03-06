//Very basic citation page

import React from "react";
import Container from 'react-bootstrap/Container'

const Citation = () => {
    return (
        <Container>
            <div class="collab">
            <h1 id="how-to-cite-our-work">How to cite our work</h1>
            <p>When citing our work, we ask that you include the version number and, when referencing a specific segment of the site, indicate the editor or translator associated with the cited text.</p>

            <h2 id="citing-the-entire-site">Citing the entire site:</h2>
            <p><em>The Huon d’Auvergne Digital Archive</em>. Edited by Leslie Zarker Morgan &amp; Stephen P. McCormick. Translated by Shira Schwam Baird. Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org, version 1.0.0. Accessed 23 Apr. 2018.</p>

            <h2 id="citing-editions-and-translation-individually">Citing editions and translation individually:</h2>

            <p>McCormick, Stephen P., ed. <em>Digital Edition of Huon d’Auvergne According to the Barbieri Fragment, Bologna, Biblioteca dell’Archiginnasio B. 3489.</em> Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org/br, version 1.0.0. Accessed 23 Apr. 2018.</p>

            <p>McCormick, Stephen P., ed. <em>Digital Edition of Huon d’Auvergne According to Padua, Biblioteca del Seminario Vescovile MS 32.</em> Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org/p, version 1.0.0. Accessed 23 Apr. 2018.</p>

            <p>Morgan, Leslie Zarker, ed. <em>Digital Edition of Huon d’Auvergne According to Berlin, Kupferstichkabinett 78 D 8.</em> Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org/b, version 1.0.0. Accessed 23 Apr. 2018.</p>

            <p>Morgan, Leslie Zarker, ed. <em>Digital Edition of Huon d’Auvergne According to Turin, Biblioteca Nazionale Universitaria, N III 19.</em> Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org/t, version 1.0.0. Accessed 23 Apr. 2018.</p>

            <p>Schwam-Baird, Shira, trans. <em>Translation of Huon d’Auvergne According to Berlin, Kupferstichkabinett 78 D 8.</em> Washington &amp; Lee U, 31 Aug. 2017, www.huondauvergne.org/b-translation, version 1.0.0. Accessed 23 Apr. 2018.</p>

            </div>
        </Container>
    )
}

export default Citation
