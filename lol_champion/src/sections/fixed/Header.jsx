import HomeBody from "../HOME/homeBody";
import InventoryBody from "../Inventory/InventoryBody";

import "./Header.css"
import logo from "../../../images/logo.png"
import { WarningCircle, UserCircle, Backpack, Wrench, HardDrives, Coins, FlowerLotus, DiamondsFour } from "phosphor-react"

const Header = ({setHeaderNav}) => {
    return (
    <div className="magnum-header">
        <div className="right-header">
            <img src={logo} alt="logo do league of legends" className="logo" />
            <span>jogar</span>
            <WarningCircle size={32} weight="fill" color="#037a97"/>
            <span onClick={()=>{setHeaderNav(<HomeBody/>), setBg(bgHome)}}>Inicio</span>
            <span>TFT</span>
            <span>Clash</span>
        </div>
        <div className="left-header">
            <div className="user-data-nav">
                <div className="inventory">
                    <span>
                        <UserCircle size={32} weight="fill" />
                    </span>
                    <span onClick={()=>{setHeaderNav(<InventoryBody/>), setBg(bgDefault)}}>
                        <Backpack size={32} weight="fill" />
                    </span>
                    <span>
                        <Wrench size={32} weight="fill" />
                    </span>
                    <span>
                        <HardDrives size={32} weight="fill" />
                    </span>
                    <span>
                        <Coins size={32} weight="fill" />
                    </span>
                </div>
                <div className="wallet">
                    <span className="wallet-data">
                        <span className="wallet-data riot-points-data">
                            <FlowerLotus size={20} weight="fill" color="#e3ba3d"/>
                        </span>
                        <span className="wallet-color-text">1000</span>
                    </span>
                    <span className="wallet-data">
                        <span className="wallet-data blue-essence">
                            <DiamondsFour size={20} weight="fill" color="#0ac9e4"/>
                        </span>
                        <span className="wallet-color-text">
                            1000
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default Header;