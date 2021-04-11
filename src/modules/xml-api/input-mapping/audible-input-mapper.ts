import { BaseInputMapper } from './base-input-mapper'
import { GenericAudioInput } from '../../../types/input'

export abstract class GenericAudioInputMapper extends BaseInputMapper {
	requiredAttributes = ['audiobusses', 'muted', 'solo', 'volume', 'balance', 'meterF1']

	map(input: Element): GenericAudioInput {
		// Map base output attributes
		const output = {
			...super.map(input),

			audiobusses: input.attributes.getNamedItem('audiobusses')!.value.split(''),
			muted: input.attributes.getNamedItem('muted') ? Boolean(input.attributes.getNamedItem('muted')!.value === 'True') : false,
			solo: input.attributes.getNamedItem('solo') ? Boolean(input.attributes.getNamedItem('solo')!.value === 'True') : false,
			state: input.attributes.getNamedItem('state')!.value,
			volume: Number(input.attributes.getNamedItem('volume')!.value),
			balance: Number(input.attributes.getNamedItem('balance')!.value),
			meterF1: Number(input.attributes.getNamedItem('meterF1')!.value),
			meterF2: input.attributes.getNamedItem('meterF2') ? Number(input.attributes.getNamedItem('meterF2')!.value) : undefined,
			gainDb: input.attributes.getNamedItem('gainDb') ? Number(input.attributes.getNamedItem('gainDb')!.value) : undefined,
		}

		return output
	}
}
