import * as contentTypeServie from '../services/contentTypeStore'
import * as entriesService from '../services/entriesStore'

// since we are using promises already we can make redux-promise-middlware create
// so actions automatically for us so if we pass in a promise in the payload ti will
// dispatch ACTION_TYPE_PENDING, ACTION_TYPE_FULFILLED and ACTION_TYPE_REJECTED automatically
export function getContentTypes () {
  return {
    type: 'FETCH_CONTENT_TYPES',
    payload: contentTypeServie.getContentTypes()
  }
}

export function findContentTypeInList (contentTypes, id) {
  return {
    type: 'FIND_CONTENT_TYPE_IN_LIST',
    payload: contentTypeServie.findContentTypeInList(contentTypes, id)
  }
}

export function findContentType (id) {
  return {
    type: 'FIND_CONTENT_TYPE',
    id
  }
}

export function loadEntries ({entryId, contentTypeId, contentTypeChanged} = {}) {
  return {
    type: 'FETCH_ENTRIES',
    payload: entriesService.loadEntries({entryId, contentTypeId, contentTypeChanged})
  }
}
