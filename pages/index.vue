<template>
  <div>
    <VCard
      class="mb-6"
      title="Добро пожаловать в FFabrika 🚀"
    >
      <VCardText>
        FFabrika — ваш универсальный CRM-сервис для автоматизации процессов на предприятии: управление товарами, заказами, маркировкой и многое другое.
      </VCardText>
    </VCard>

    <VCard
      class="mb-6"
      title="Управление товарами и заказами 📦"
    >
      <VCardText>
        Добавляйте и редактируйте товары, отслеживайте остатки на складе и обрабатывайте заказы клиентов в одном месте.
      </VCardText>
      <VCardText>
        Перейдите в раздел <router-link to="/product/list" class="text-decoration-none">Товары</router-link> и 
        <router-link to="/client/list" class="text-decoration-none">Клиенты</router-link>, чтобы начать.
      </VCardText>
    </VCard>

    <VCard title="Маркировка и импорт данных 🗂️">
      <VCardText>
        Загружайте CSV-файлы с данными и настраивайте этикетки для товаров и размеров.
      </VCardText>
      <VCardText>
        Перейдите в раздел <router-link to="/marking/list" class="text-decoration-none">
          Маркировка
        </router-link> для начала работы.
      </VCardText>
    </VCard>
  </div>
</template>

<script setup lang="ts">
</script>
