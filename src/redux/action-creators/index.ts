import * as TicketsActionsCreators from './ticketsList'
import * as ShowMoreActionCreator from './showMore'
import * as FilterActionsCreator from './filter'

export default {
  ...TicketsActionsCreators,
  ...ShowMoreActionCreator,
  ...FilterActionsCreator,
}
