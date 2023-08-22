import React, { useState } from 'react';
import styles from './styles.module.css';

const rcw1046 = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [binaryString, setBinaryString] = useState('');
    const linesPerPage = 100;

    const binaryTableBody = binaryString.slice(currentPage * linesPerPage, (currentPage + 1) * linesPerPage);

    const bitDescriptions = {
        0: "SYS_PLL_CFG[0:1]",
        1: "SYS_PLL_CFG[0:1]",
        2: "SYS_PLL_RAT[2:6]",
        3: "SYS_PLL_RAT[2:6]",
        4: "SYS_PLL_RAT[2:6]",
        5: "SYS_PLL_RAT[2:6]",
        6: "SYS_PLL_RAT[2:6]",
        8: "MEM_PLL_CFG[8:9]",
        9: "MEM_PLL_CFG[8:9]",
        10: "MEM_PLL_RAT[10:15]",
        11: "MEM_PLL_RAT[10:15]",
        12: "MEM_PLL_RAT[10:15]",
        13: "MEM_PLL_RAT[10:15]",
        14: "MEM_PLL_RAT[10:15]",
        15: "MEM_PLL_RAT[10:15]",
        24: "CGA_PLL1_CFG[24:25]",
        25: "CGA_PLL1_CFG[24:25]",
        26: "CGA_PLL1_RAT[26:31]",
        27: "CGA_PLL1_RAT[26:31]",
        28: "CGA_PLL1_RAT[26:31]",
        29: "CGA_PLL1_RAT[26:31]",
        30: "CGA_PLL1_RAT[26:31]",
        31: "CGA_PLL1_RAT[26:31]",
        32: "CGA_PLL2_CFG[32:33]",
        33: "CGA_PLL2_CFG[32:33]",
        34: "CGA_PLL2_RAT[34:39]",
        35: "CGA_PLL2_RAT[34:39]",
        36: "CGA_PLL2_RAT[34:39]",
        37: "CGA_PLL2_RAT[34:39]",
        38: "CGA_PLL2_RAT[34:39]",
        39: "CGA_PLL2_RAT[34:39]",
        96: "C1_PLL_SEL[96:99]",
        97: "C1_PLL_SEL[96:99]",
        98: "C1_PLL_SEL[96:99]",
        99: "C1_PLL_SEL[96:99]",
        128: "SRDS_PRTCL_S1[128:143]",
        129: "SRDS_PRTCL_S1[128:143]",
        130: "SRDS_PRTCL_S1[128:143]",
        131: "SRDS_PRTCL_S1[128:143]",
        132: "SRDS_PRTCL_S1[128:143]",
        133: "SRDS_PRTCL_S1[128:143]",
        134: "SRDS_PRTCL_S1[128:143]",
        135: "SRDS_PRTCL_S1[128:143]",
        136: "SRDS_PRTCL_S1[128:143]",
        137: "SRDS_PRTCL_S1[128:143]",
        138: "SRDS_PRTCL_S1[128:143]",
        139: "SRDS_PRTCL_S1[128:143]",
        140: "SRDS_PRTCL_S1[128:143]",
        141: "SRDS_PRTCL_S1[128:143]",
        142: "SRDS_PRTCL_S1[128:143]",
        143: "SRDS_PRTCL_S1[128:143]",
        144: "SRDS_PRTCL_S2[144:159]",
        145: "SRDS_PRTCL_S2[144:159]",
        146: "SRDS_PRTCL_S2[144:159]",
        147: "SRDS_PRTCL_S2[144:159]",
        148: "SRDS_PRTCL_S2[144:159]",
        149: "SRDS_PRTCL_S2[144:159]",
        150: "SRDS_PRTCL_S2[144:159]",
        151: "SRDS_PRTCL_S2[144:159]",
        152: "SRDS_PRTCL_S2[144:159]",
        153: "SRDS_PRTCL_S2[144:159]",
        154: "SRDS_PRTCL_S2[144:159]",
        155: "SRDS_PRTCL_S2[144:159]",
        156: "SRDS_PRTCL_S2[144:159]",
        157: "SRDS_PRTCL_S2[144:159]",
        158: "SRDS_PRTCL_S2[144:159]",
        159: "SRDS_PRTCL_S2[144:159]",
        160: "SRDS_PLL_REF_CLK_SEL_S1[160:161]",
        161: "SRDS_PLL_REF_CLK_SEL_S1[160:161]",
        162: "SRDS_PLL_REF_CLK_SEL_S2[162:163]",
        163: "SRDS_PLL_REF_CLK_SEL_S2[162:163]",
        168: "SRDS_PLL_PD_S1[168:169]",
        169: "SRDS_PLL_PD_S1[168:169]",
        170: "SRDS_PLL_PD_S2[170:171]",
        171: "SRDS_PLL_PD_S2[170:171]",
        176: "SRDS_DIV_PEX_S1[176:177]",
        177: "SRDS_DIV_PEX_S1[176:177]",
        178: "SRDS_DIV_PEX_S2[178:179]",
        179: "SRDS_DIV_PEX_S2[178:179]",
        186: "DDR_REFCLK_SEL[186:187]",
        187: "DDR_REFCLK_SEL[186:187]",
        188: "SRDS_REFCLK_SEL_S1[188]",
        189: "SRDS_REFCLK_SEL_S2[189]",
        190: "DDR_FDBK_MULT[190:191]",
        191: "DDR_FDBK_MULT[190:191]",
        192: "PBI_SRC[192:195]",
        193: "PBI_SRC[192:195]",
        194: "PBI_SRC[192:195]",
        195: "PBI_SRC[192:195]",
        201: "BOOT_HO[201]",
        202: "SB_EN[202]",
        203: "IFC_MODE[203:211]",
        204: "IFC_MODE[203:211]",
        205: "IFC_MODE[203:211]",
        206: "IFC_MODE[203:211]",
        207: "IFC_MODE[203:211]",
        208: "IFC_MODE[203:211]",
        209: "IFC_MODE[203:211]",
        210: "IFC_MODE[203:211]",
        211: "IFC_MODE[203:211]",
        224: "HWA_CGA_M1_CLK_SEL[224:226]",
        225: "HWA_CGA_M1_CLK_SEL[224:226]",
        226: "HWA_CGA_M1_CLK_SEL[224:226]",
        230: "DRAM_LAT[230:231]",
        231: "DRAM_LAT[230:231]",
        232: "DDR_RATE[232]",
        234: "DDR_RSV0[234]",
        242: "SYS_PLL_SPD[242]",
        243: "MEM_PLL_SPD[243]",
        244: "CGA_PLL1_SPD[244]",
        245: "CGA_PLL2_SPD[245]",
        264: "HOST_AGT_PEX[264:266]",
        265: "HOST_AGT_PEX[264:266]",
        266: "HOST_AGT_PEX[264:266]",
        288: "GP_INFO[288:319]",
        289: "GP_INFO[288:319]",
        290: "GP_INFO[288:319]",
        291: "GP_INFO[288:319]",
        292: "GP_INFO[288:319]",
        293: "GP_INFO[288:319]",
        294: "GP_INFO[288:319]",
        295: "GP_INFO[288:319]",
        296: "GP_INFO[288:319]",
        297: "GP_INFO[288:319]",
        298: "GP_INFO[288:319]",
        299: "GP_INFO[288:319]",
        300: "GP_INFO[288:319]",
        301: "GP_INFO[288:319]",
        302: "GP_INFO[288:319]",
        303: "GP_INFO[288:319]",
        304: "GP_INFO[288:319]",
        305: "GP_INFO[288:319]",
        306: "GP_INFO[288:319]",
        307: "GP_INFO[288:319]",
        308: "GP_INFO[288:319]",
        309: "GP_INFO[288:319]",
        310: "GP_INFO[288:319]",
        311: "GP_INFO[288:319]",
        312: "GP_INFO[288:319]",
        313: "GP_INFO[288:319]",
        314: "GP_INFO[288:319]",
        315: "GP_INFO[288:319]",
        316: "GP_INFO[288:319]",
        317: "GP_INFO[288:319]",
        318: "GP_INFO[288:319]",
        319: "GP_INFO[288:319]",
        323: "LVDS_TERM_SEL_OVRD[323]",
        324: "LVDS_TERM_SEL_VALUE[324:326]",
        325: "LVDS_TERM_SEL_VALUE[324:326]",
        326: "LVDS_TERM_SEL_VALUE[324:326]",
        354: "UART_EXT[354:356]",
        355: "UART_EXT[354:356]",
        356: "UART_EXT[354:356]",
        357: "IRQ_EXT[357:359]",
        358: "IRQ_EXT[357:359]",
        359: "IRQ_EXT[357:359]",
        360: "SPI_EXT[360:362]",
        361: "SPI_EXT[360:362]",
        362: "SPI_EXT[360:362]",
        363: "SDHC_EXT[363:365]",
        364: "SDHC_EXT[363:365]",
        365: "SDHC_EXT[363:365]",
        366: "UART_BASE[366:368]",
        367: "UART_BASE[366:368]",
        368: "UART_BASE[366:368]",
        369: "ASLEEP[369]",
        370: "RTC[370]",
        371: "SDHC_BASE[371]",
        372: "IRQ_OUT[372]",
        373: "IRQ_BASE[373:381]",
        374: "IRQ_BASE[373:381]",
        375: "IRQ_BASE[373:381]",
        376: "IRQ_BASE[373:381]",
        377: "IRQ_BASE[373:381]",
        378: "IRQ_BASE[373:381]",
        379: "IRQ_BASE[373:381]",
        380: "IRQ_BASE[373:381]",
        381: "IRQ_BASE[373:381]",
        382: "SPI_BASE[382:383]",
        383: "SPI_BASE[382:383]",
        384: "IFC_GRP_A_EXT[384:386]",
        385: "IFC_GRP_A_EXT[384:386]",
        386: "IFC_GRP_A_EXT[384:386]",
        387: "IFC_GRP_B_EXT[387:389]",
        388: "IFC_GRP_B_EXT[387:389]",
        389: "IFC_GRP_B_EXT[387:389]",
        390: "IFC_GRP_C_EXT[390:392]",
        391: "IFC_GRP_C_EXT[390:392]",
        392: "IFC_GRP_C_EXT[390:392]",
        393: "IFC_GRP_D_EXT[393:395]",
        394: "IFC_GRP_D_EXT[393:395]",
        395: "IFC_GRP_D_EXT[393:395]",
        396: "IFC_GRP_E1_EXT[396:398]",
        397: "IFC_GRP_E1_EXT[396:398]",
        398: "IFC_GRP_E1_EXT[396:398]",
        399: "IFC_GRP_F_EXT[399:401]",
        400: "IFC_GRP_F_EXT[399:401]",
        401: "IFC_GRP_F_EXT[399:401]",
        402: "IFC_GRP_G_EXT[402:404]",
        403: "IFC_GRP_G_EXT[402:404]",
        404: "IFC_GRP_G_EXT[402:404]",
        405: "IFC_GRP_E1_BASE[405]",
        406: "IFC_GRP_E2_BASE[406]",
        407: "IFC_GRP_D_BASE[407]",
        409: "IFC_GRP_C_BASE[409]",
        410: "IFC_GRP_B_BASE[410:411]",
        411: "IFC_GRP_B_BASE[410:411]",
        412: "IFC_GRP_A_BASE[412:413]",
        413: "IFC_GRP_A_BASE[412:413]",
        415: "IFC_A_22_24[415]",
        416: "EC1[416:418]",
        417: "EC1[416:418]",
        418: "EC1[416:418]",
        419: "EC2[419:421]",
        420: "EC2[419:421]",
        421: "EC2[419:421]",
        422: "LVDD_VSEL[422:423]",
        423: "LVDD_VSEL[422:423]",
        425: "EM1[425]",
        426: "EM2[426]",
        427: "EMI2_DMODE[427]",
        428: "EMI2_CMODE[428]",
        429: "USB_DRVVBUS[429]",
        430: "USB_PWRFAULT[430]",
        433: "TVDD_VSEL[433:434]",
        434: "TVDD_VSEL[433:434]",
        435: "DVDD_VSEL[435:436]",
        436: "DVDD_VSEL[435:436]",
        437: "QE_CLK_OVRRIDE[437]",
        438: "EMI1_DMODE[438]",
        439: "EVDD_VSEL[439:440]",
        440: "EVDD_VSEL[439:440]",
        441: "IIC2_BASE[441:443]",
        442: "IIC2_BASE[441:443]",
        443: "IIC2_BASE[441:443]",
        444: "EMI1_CMODE[444]",
        445: "IIC2_EXT[445:447]",
        446: "IIC2_EXT[445:447]",
        447: "IIC2_EXT[445:447]",
        472: "SYSCLK_FREQ[472:481]",
        473: "SYSCLK_FREQ[472:481]",
        474: "SYSCLK_FREQ[472:481]",
        475: "SYSCLK_FREQ[472:481]",
        476: "SYSCLK_FREQ[472:481]",
        477: "SYSCLK_FREQ[472:481]",
        478: "SYSCLK_FREQ[472:481]",
        479: "SYSCLK_FREQ[472:481]",
        480: "SYSCLK_FREQ[472:481]",
        481: "SYSCLK_FREQ[472:481]",
        509: "HWA_CGA_M2_CLK_SEL[509:511]",
        510: "HWA_CGA_M2_CLK_SEL[509:511]",
        511: "HWA_CGA_M2_CLK_SEL[509:511]"
    };

    const isValidHex = (hex) => /^[0-9A-Fa-f]+$/.test(hex);

    const hexToBinary = (hex) => parseInt(hex, 16).toString(2).padStart(hex.length * 4, '0');

    const convertRCWToBinary = () => {
        const rcwInput = document.getElementById('rcwInput').value;
        const lines = rcwInput.split('\n');
        let newBinaryString = '';

        lines.forEach((line) => {
            const hexValues = line.trim().split(/\s+/);
            hexValues.forEach((hexValue) => {
                if (isValidHex(hexValue)) {
                    newBinaryString += hexToBinary(hexValue);
                }
            });
        });

        setCurrentPage(0);
        setBinaryString(newBinaryString);
    };

    const updateBinaryOutput = () => {
        const totalPageCount = Math.ceil(binaryString.length / linesPerPage);
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Bit</th>
                            <th>Value</th>
                            <th>Bit name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {binaryTableBody.split('').map((bitValue, index) => {
                            const bitIndex = index + currentPage * linesPerPage;
                            const bitDescription = bitDescriptions[bitIndex] || 'Reserved Bit';
                            return (
                                <tr key={bitIndex}>
                                    <td>Bit {bitIndex}</td>
                                    <td>{bitValue}</td>
                                    <td>{bitDescription}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    const generatePageNumbers = (totalPageCount) => {
        const pageNumbers = [];
        for (let i = 0; i < totalPageCount; i++) {
            const pageNumber = i + 1;
            if (i === currentPage) {
                pageNumbers.push(<strong key={i}>{pageNumber}</strong>);
            } else {
                pageNumbers.push(
                    <a href="#" key={i} onClick={() => setCurrentPage(i)}>
                        {pageNumber}
                    </a>
                );
            }
            pageNumbers.push(' ');
        }
        return pageNumbers;
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextPage = () => {
        const totalPageCount = Math.ceil(binaryString.length / linesPerPage);
        if (currentPage < totalPageCount - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="container">
            <p style={{margin: "20px 10px",}}></p><h1>LS1046a RCW Hex to Binary Converter</h1>
            <textarea id="rcwInput" className={ styles.form } rows="8" cols="46" placeholder="Enter RCW hex values"></textarea>
            <button className={ styles.button64 } role="button" onClick={convertRCWToBinary}><span class="text">Convert</span></button>
            <div>
                <button id="prevPage" onClick={prevPage}>
                    Previous Page
                </button>
                <span id="pageNumbers" className={ styles.pageNumbers }>{generatePageNumbers(Math.ceil(binaryString.length / linesPerPage))}</span>
                <button id="nextPage" onClick={nextPage}>
                    Next Page
                </button>
            </div>
            <div id="binaryOutput">{updateBinaryOutput()}</div>
        </div>
    );
};

export default rcw1046;
