import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

/**
 * solid icons
 */
import {
    faUser as fasUser,
    faKey as fasKey,
    faBars as fasBars,
    faCamera as fasCamera,
    faChevronDown as fasChevronDown,
    faChevronUp as fasChevronUp,
    faCog as fasCog,
    faPlusSquare as fasPlusSquare,
    faBook as fasBook,
    faMotorcycle as fasMotorcycle,
    faMoneyBillAlt as fasMoneyBillAlt,
    faPlus as fasPlus,
    faTrash as fasTrash,
    faEye as fasEye,
    faEyeSlash as fasEyeSlash,
    faBuilding as fasBuilding,
    faSearch as fasSearch,
    faSyncAlt as fasSyncAlt,
    faAngleDown as fasAngleDown,
    faAngleUp as fasAngleUp,
    faSignOutAlt as fasSignOutAlt,
    faPencilAlt as fasPencilAlt,
    faDoorClosed as fasDoorClosed,
    faDoorOpen as fasDoorOpen,
    faSpinner as fasSpinner,
    faUndoAlt as fasUndoAlt,
} from '@fortawesome/free-solid-svg-icons'

/**
 * regular icons
 */
import {
    faFileAlt as farFileAlt,
    faCheckSquare as farCheckSquare,
    faSquare as farSquare,

} from '@fortawesome/free-regular-svg-icons'

/**
 * brands icons
 */
import {faYoutube as fabYoutube,} from '@fortawesome/free-brands-svg-icons'

library.add(
    fasKey,
    fasCamera,
    fasUser,
    fasChevronDown,
    fasChevronUp,
    fasBars,
    fasCog,
    fasPlusSquare,
    fasBook,
    fasMotorcycle,
    fasMoneyBillAlt,
    fasPlus,
    fasTrash,
    fasEye,
    fasEyeSlash,
    fasBuilding,
    fasSearch,
    fasSyncAlt,
    fasAngleDown,
    fasAngleUp,
    farFileAlt,
    fasSignOutAlt,
    fasPencilAlt,
    farCheckSquare,
    farSquare,
    fabYoutube,
    fasDoorOpen,
    fasDoorClosed,
    fasSpinner,
    fasUndoAlt,
)
;

export {FontAwesomeIcon};