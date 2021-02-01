import * as core from '@actions/core'
import {checkDeliveryFlowStatus} from './delivery-flow'

async function run(): Promise<void> {
  try {
    const application: string = core.getInput('application', {required: true})
    const flow: string = core.getInput('flow', {required: true})

    core.debug(
      `Check delivery ${flow} flow status for application ${application}`
    )
    await checkDeliveryFlowStatus(application, flow)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
