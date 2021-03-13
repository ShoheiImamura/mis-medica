<template>
  <q-page class="row items-center justify-evenly">
    <q-card>
      <q-card-section>
        <div>{{comparison.subject}}</div>
      </q-card-section>
    </q-card>

    <q-list bordered>
      普通はこう考えてしまうけど...
      <q-separator></q-separator>
      <!-- 期待 -->
      <q-item
        clickable="false"
        v-for="expectation in comparison.expectations"
        :key="expectation.id"
      >
        <q-item-section>
          <q-chat-message
            :text="[expectation.message]"
            bg-color="indigo-1"
          />
        </q-item-section>
      </q-item>
      <q-separator></q-separator>
      実際は...
      <q-separator></q-separator>
      <!-- 実際 -->
      <q-expansion-item
        v-for="actuality in comparison.actualities"
        :key="actuality.id"
        :label="actuality.message"
        expand-icon-toggle
      >
        <q-card>
          <q-card-section>
            {{actuality.detail}}
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>

  </q-page>
</template>

<script lang="ts">
import { Comparison } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from '@vue/composition-api';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const comparison = ref<Comparison>({
      id: 12,
      subject: '対象記事タイトル',
      citationUrl: 'https://example.com/',
      expectations: [
        {
          id: 1,
          message:
            '期待するメッセージ1期待するメッセージ1期待するメッセージ1期待するメッセージ1期待するメッセージ1'
        },
        { id: 2, message: '期待するメッセージ2' },
        { id: 3, message: '期待するメッセージ3' }
      ],
      actualities: [
        {
          id: 1,
          message:
            '実際のことがら実際のことがら実際のことがら実際のことがら実際のことがら',
          detail:
            '事柄詳細...事柄詳細...事柄詳細...事柄詳細...事柄詳細...事柄詳細...事柄詳細...事柄詳細...事柄詳細...',
          evidenceUrl: 'https://example.com/'
        },
        {
          id: 2,
          message: '実際のことがら',
          detail: '事柄詳細...',
          evidenceUrl: 'https://example.com/'
        },
        {
          id: 3,
          message: '実際のことがら',
          detail: '事柄詳細...',
          evidenceUrl: 'https://example.com/'
        }
      ]
    });

    return { comparison };
  }
});
</script>
