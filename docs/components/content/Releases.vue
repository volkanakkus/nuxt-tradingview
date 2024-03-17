<template>
  <GithubReleases v-slot="{ releases }">
    <div v-for="release in releases" :key="release.name">
      <ContentRenderer style="zoom: 0.9" :value="release" />
      <div class="releases-footer">
        <a class="author" :href="release.author.url">
          <img style="height: 32px; width: 32px" :src="release.author.avatar" />
          {{ release.author.name }}
        </a>
        - Published on {{ new Date(release.date).toDateString() }}
      </div>
    </div>
  </GithubReleases>
</template>

<style>
.releases-footer {
  margin-top: 20px;
  font-size: 0.9em;
  display: flex;
  align-items: center;
  margin-top: 50px;
  color: var(--color-text-secondary);
}

.author {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  margin-right: 5px;
}

.author img {
  border-radius: 50%;
}
</style>
